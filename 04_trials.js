// In this file you can specify the trial data for your experiment

const situations = [
  { 
      number: 1,
      sequence: ["ACCCD", "ACCDD", "AACDD", "AACCD", "ABCDD", "ABCCD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,3,0,0]}
      ]
  },

  {
      number: 2,
      sequence: ["CDDDD", "CCDDD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [3,3,0,0,0]}
      ]
  },

  {
      number: 3,
      sequence: ["BDDDD", "BBDDD", "BCDDD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [9,9,0,0,0]}
      ]
  },

  {
      number: 4,
      sequence: ["ADDDD", "AADDD", "ABDDD", "ACDDD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,0,0,0]}
      ]
  },

  {
      number: 5,
      sequence: ["CCCDD", "CCCCD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [3,3,3,0,0]}
      ]
  },

  {
      number: 6,
      sequence: ["BCCCD", "BCCDD", "BBCDD", "BBCCD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [9,9,3,0,0]}
      ]
  },

  {
      number: 7,
      sequence: ["BBBDD", "BBBBD", "BBBCD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [9,9,9,0,0]}
      ]
  },

  {
      number: 8,
      sequence: ["ABBBD", "ABBDD", "AABDD", "ABBBD", "ABBCD", "AABCD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,9,0,0]}
      ]
  },

  {
      number: 9,
      sequence: ["AAADD", "AAAAD", "AAABD", "AAACD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,12,0,0]}
      ]
  },

  {
      number: 10,
      sequence: ["DDDDD"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [0,0,0,0,0]}
      ]
  },

  {
      number: 11,
      sequence: ["CCCCC"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [3,3,3,3,3]}
      ]
  },

  {
      number: 12,
      sequence: ["BCCCC", "BBCCC"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [9,9,3,3,3]}
      ]
  },

  {
      number: 13,
      sequence: ["ACCCC", "AACCC", "ABCCC"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,3,3,3]}
      ]
  },

  {
      number: 14,
      sequence: ["BBBCC", "BBBBC"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [9,9,9,3,3]}
      ]
  },

  {
      number: 15,
      sequence: ["ABBBC", "ABBCC", "AABCC", "AABBC"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,9,3,3]}
      ]
  },

  {
      number: 16,
      sequence: ["AAACC", "AAAAC", "AAABC"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,12,3,3]}
      ]
  },

  {
      number: 17,
      sequence: ["BBBBB"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [9,9,9,9,9]}
      ]
  },

  {
      number: 18,
      sequence: ["ABBBB", "AABBB"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,9,9,9]}
      ]
  },

  {
      number: 19,
      sequence: ["AAABB", "AAAAB"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,12,9,9]}
      ]
  },

  {
      number: 20,
      sequence: ["AAAAA"],
      truth_table: [],
      instances: [
          {n_col: 12, rows: [12,12,12,12,12]}
      ]
  }

];

// the example trials are defined manually
const training_trials_data = [
    {
      QUD: '',
      bias: 0.5,
      row_number: 5,
      column_number: 12,
      condition: "low",
      question: "Describe these results of <strong>Riverside</strong> so as to make it appear as if there is a <strong>low</strong> success rate without lying.",
      sentence_chunk_1: "In this exam",
      sentence_chunk_2: "of the students got",
      sentence_chunk_3: "of the questions",
      sentence_chunk_4: ".",
      choice_options_1: ["all", "most", "some", "none"],
      choice_options_2: ["all", "most", "some", "none"],
      choice_options_3: ["right", "wrong"]
    },
    {
      QUD: '',
      bias: 0.9,
      row_number: 5,
      column_number: 12,
      condition: "high",
      question: "Describe these results of <strong>Green Valley</strong> so as to make it appear as if there is a <strong>high</strong> success rate without lying.",
      sentence_chunk_1: "In this exam",
      sentence_chunk_2: "of the students got",
      sentence_chunk_3: "of the questions",
      sentence_chunk_4: ".",
      choice_options_1: ["all", "most", "some", "none"],
      choice_options_2: ["all", "most", "some", "none"],
      choice_options_3: ["right", "wrong"]
    },
    {
      QUD: '',
      bias: 0.2,
      row_number: 5,
      column_number: 12,
      condition: "high",
      question: "Describe these results of <strong>Green Valley</strong> so as to make it appear as if there is a <strong>high</strong> success rate without lying.",
      sentence_chunk_1: "In this exam",
      sentence_chunk_2: "of the students got",
      sentence_chunk_3: "of the questions",
      sentence_chunk_4: ".",
      choice_options_1: ["all", "most", "some", "none"],
      choice_options_2: ["all", "most", "some", "none"],
      choice_options_3: ["right", "wrong"]
      }
  ];

// the main trials are generated by calling the function create_trials with the corresponding arguments
// generate trials for flat bias (nr of trials, nr of rows, nr of columns, bias)

// main trials

const main_trials_data = _.shuffle(_.flatten([

    create_trials_situation(1, "high", situations[0]),

]));
