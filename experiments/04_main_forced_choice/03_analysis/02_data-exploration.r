# load helper functions
source('01_helpers.r')

## ***********************************
## exploring the design / set-up  ----
## ***********************************

tibble(
  informativity = informativity_vector,
  arg_strength  = arg_strength_vector,
  sentence = names(arg_strength)
) %>% 
  ggplot(
    aes(
      x = informativity,
      y = arg_strength
    )
  ) +
  geom_point(alpha = 0.4) + theme_ida()
  # ggrepel::geom_text_repel(aes(label = sentence))

## ******************************
## various desriptive stats  ----
## ******************************

d %>% count(truth_value) # most answers were true!!

# by-subject & condition mean truth and mean arg.str
d_true %>% group_by(submission_id, condition) %>% 
  summarize(
    mean_arg  = mean(best_arg_deviance),
    mean_info = mean(best_info_deviance)
  ) %>% 
  ggplot(aes(x = mean_info, y = mean_arg, color = condition)) + 
  geom_smooth(method = "lm", color = "darkgreen", alpha = 0.3) +
  geom_point()
  
# by-situation & condition mean truth and mean arg.str
d_true %>% group_by(situation_number, condition) %>% 
  summarize(
    mean_arg  = mean(best_arg_deviance),
    mean_info = mean(best_info_deviance)
  ) %>% 
  ggplot(aes(x = mean_info, y = mean_arg, color = condition)) + 
  geom_smooth(method = "lm", color = "darkgreen", alpha = 0.3) +
  geom_point() +
  ggrepel::geom_text_repel(aes(label = situation_number))

# by situation & condition argument strength
d %>% group_by(situation_number, condition) %>% 
  summarize(
    mean_true = mean(truth_value),
    mean_arg  = mean(true_best - arg_strength)
  ) %>% View()


## *********************************
## by-subject desriptive stats  ----
## *********************************

d %>%
  filter( truth_value == TRUE) %>% 
  ggplot(aes(y = best_arg_deviance, x = situation_number)) +
  geom_jitter(alpha = 0.3) +
  facet_wrap(. ~ condition)


## ***************************************
## comparison delta-arg / delta-info  ----
## ***************************************

d_true %>% 
  ggplot(
    aes(
      x = best_info_deviance, 
      y = best_arg_deviance,
      color = condition
    )
  ) +
  geom_point()

s_nr = 20
model_prediction = as.matrix(fit_MAP$par$pre)
colnames(model_prediction) = sentences
d_true %>% 
  filter(situation_number == s_nr, condition == "high") %>% 
  count(condition, response) %>% 
  group_by(condition) %>% 
  mutate(
    arg_str = arg_strength_vector[response],
    info = informativity_vector[response],
    model_pred = model_prediction[s_nr,response]
  ) %>% 
  View()

# for each situation get the proportion of best-info and best-arg choices

proportions_by_situation <- d_true %>% 
  # filter(condition == "high") %>% 
  group_by(situation_number, condition) %>% 
  count(response, best_arg_deviance, best_info_deviance) %>%
  mutate(
    proportion = n / sum(n)
  ) %>% 
  summarise(
    proportion_best_arg = ifelse(
      0 %in% best_arg_deviance,
      proportion[which(best_arg_deviance == 0)],
      0
    ),
    proportion_best_info = ifelse(
      0 %in% best_info_deviance,
      proportion[which(best_info_deviance == 0)],
      0
    ),
    modal_arg  = str_c(response[which(min(best_arg_deviance) == best_arg_deviance)], collapse = "::")[1],
    modal_info = str_c(response[which(min(best_info_deviance) == best_info_deviance)], collapse = "::")[1],
    modal_resp = response[which(max(proportion) == proportion)],
    modal_resp_best_arg  = response[which(proportion == max(proportion))] %in% 
      response[which(min(best_arg_deviance) == best_arg_deviance)],
    modal_resp_best_info = response[which(proportion == max(proportion))] %in% 
      response[which(min(best_info_deviance) == best_info_deviance)]
  )

proportions_by_situation %>% 
  pivot_longer(c("proportion_best_arg", "proportion_best_info")) %>% 
  ggplot(aes(x = name, y = value, fill = name)) +
  geom_col() +
  coord_flip() +
  # checks and marks
  # custom axis
  geom_segment(aes(x = 0, xend = 3, y = 0, yend = 0 ), color = "lightgray") +
  # geom_text(aes(x = 1.5, y = -0.025, label = "0"), size = 3, color = "lightgray") +
  geom_segment(aes(x = 0, xend = 3, y = 1, yend = 1 ), color = "lightgray") +
  # geom_text(
  #   data = filter(proportions_by_situation, modal_resp_best_arg == T),
  #   aes(x = 1, y = 1.025, label = "X"),
  #   size = 3,
  #   color = "darkred"
  # ) +
  # facets & style
  facet_grid(situation_number ~ condition) +
  theme_ida(y.axis = F) +
  theme(
    axis.ticks = element_blank(),
    axis.text =  element_blank(),
  )


## ***********************************
## comparison between conditions  ----
## ***********************************

d_true %>% 
  select(condition, best_arg_deviance, best_info_deviance) %>% 
  pivot_longer(2:3) %>% 
  ggplot(aes(x = value)) +
  geom_histogram() +
  facet_grid(condition ~ name, scales = "free")

d_true %>% 
  select(condition, best_arg_deviance, best_info_deviance) %>% 
  pivot_longer(2:3) %>% 
  group_by(name, condition) %>% 
  summarize(
    mean = mean(value)
  )

# arg_deviance: credibly higher in LOW condition
brms::brm(
  formula = best_arg_deviance ~ condition + 
    (1 | submission_id) + 
    (1 | situation_number) , 
  data = d_true
) %>% summary()


# informativity: no credible difference
brms::brm(
  formula = best_info_deviance ~ condition + 
    (1 | submission_id) + 
    (1 | situation_number) , 
  data = d_true,
  iter = 5000
) %>% summary()

stop()









