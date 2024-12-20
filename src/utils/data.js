
export const SKILLS = [
  {
    title: "Data Analysis",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Python", percentage: "75%" },
      { skill: "R", percentage: "70%" },
      { skill: "Excel", percentage: "80%" },
      { skill: "Google Analytics", percentage: "70%" },
      { skill: "Google Tag Manager", percentage: "65%" },
      { skill: "Adobe Analytics", percentage: "50%" },
      { skill: "Machine Learning", percentage: "75%" },
      { skill: "Generative AI", percentage: "60%" },
      { skill: "LLM", percentage: "60%" },
      { skill: "Transformers", percentage: "50%" },
      { skill: "NPM", percentage: "60%" },
      { skill: "ETL", percentage: "65%" },
      { skill: "NLP", percentage: "80%" },
      { skill: "TensorFlow", percentage: "75%" },
      { skill: "Scikit-learn", percentage: "80%" },
      { skill: "Keras", percentage: "70%" },
      { skill: "Beautiful Soap", percentage: "80%" },

    ],
  },
  {
    title: "Database Systems",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skill: "MySQL", percentage: "85%" },
      { skill: "Oracle", percentage: "80%" },
      { skill: "Microsoft SQL Server", percentage: "75%" },
      { skill: "AWS Dynamo DB", percentage: "60%" },
    ],
  },
  {
    title: "Data Visualization",
    icon: "./assets/images/vie.png",
    style:{
      'background_color': "red",
    },
    iconStyle: "fill: #7c5fe6;",
    skills: [
      { skill: "Power BI", percentage: "75%" },
      { skill: "Tableau", percentage: "65%" },
      { skill: "Google Looker Studio", percentage: "40%" },
    ],
  },
  {
    title: "Cloud",
    icon: "./assets/images/c3.png",
    style:{
      'background_color': "red",
    },
    iconStyle: "fill: #7c5fe6;",
    skills: [
      { skill: "Azure DevOps", percentage: "70%" },
      { skill: "AWS Suite (S3, Glue, Redshift)", percentage: "65%" },
      { skill: "GCP", percentage: "60%" },
    ],
  },
  {
    title: "Front-End/UI",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "HTML5", percentage: "90%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "80%" },
      { skill: "BootStrap", percentage: "75%" },
      { skill: "JavaScript", percentage: "80%" },
      { skill: "React js", percentage: "80%" },
      { skill: "Node js", percentage: "70%" },
      { skill: "React Native", percentage: "70%" },
      { skill: "TypeScript", percentage: "60%" },
      { skill: "Angular", percentage: "65%" },
      { skill: "NPM", percentage: "60%" },
      { skill: "Rest API", percentage: "55%" },
      { skill: "Graph QL", percentage: "50%" },
      { skill: "Babel", percentage: "60%" },
      { skill: "WebPack", percentage: "65%" },
      { skill: "Figma", percentage: "50%" },
      { skill: "SharePoint", percentage: "50%" },

    ],
  },
  {
    title: "Tools & Languages",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "90%" },
      { skill: "Google Colab", percentage: "80%" },
      { skill: "Jupyter Notebook", percentage: "80%" },
      { skill: "Android Studio", percentage: "40%" },
      { skill: "SnowFlake", percentage: "70%" },
      { skill: "C programming", percentage: "70%" },
      { skill: "MATLAB", percentage: "75%" },
      { skill: "Visual Basic for Application", percentage: "70%" },

    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 4,
    title: "URL Web Scrapper using Gemini LLM",
    // date: "January 2022 - Present",
    responsibilities: [
      "This project is a web-based application built with Streamlit that allows users to scrape text content from a URL and ask questions about the content using a LLM (Language Learning Model) based on Gemini and Langchain agents",
      "The application utilizes the Gemini LLM from Google to provide accurate and relevant answers to the user's questions"
    ],
    gitUrl:"https://github.com/PalampalliPraneeth/Url-Web-Scrapper",
    webUrl: "https://url-web-scrapper.streamlit.app/"
    },
    {
      id: 5,
      title: "Telco Customer Churn ",
      // date: "January 2022 - Present",
      responsibilities: [
        "Revitalized machine learning pipeline, boosting telecom customer churn prediction accuracy by 20% using TensorFlow and scikit-learn, leading to a reduction in customer attrition",
        "Addressing class imbalance using SMOTE increased minority class instances by 50%, resulting in a further 10% improvement in prediction accuracy, as measured by the area under the ROC curve",
      ],
      gitUrl:"https://github.com/PalampalliPraneeth/Telcom-Customer-Churn"
    },
  {
    id: 6,
    title: "Sentimental Analysis using Amazon Reviews",
    // date: "January 2022 - Present",
    responsibilities: [
      "Developed a Python-based sentiment analyzer for Amazon.com reviews, achieving a 90% accuracy rate in categorizing sentiments as positive, negative, and neutral",
      "Engineered a neural network utilizing Keras, resulting in a 20% increase in precision for sentiment analysis"
    ],
    gitUrl:"https://github.com/PalampalliPraneeth/Sentiment-analysis"
    },
    {
      id: 7,
      title: "Red Wine Quality Prediction: A Multivariate Regression Analysis ",
      // date: "January 2022 - Present",
      responsibilities: [
        "This project analyzes the quality of red wine using various machine learning models, including linear regression, polynomial regression, decision trees, and random forests",
        "The analysis uses the red wine quality dataset, exploring relationships between chemical properties and wine quality ratings",
      ],
      gitUrl:"https://github.com/PalampalliPraneeth/Red-Wine-Quality-"
    },
    {
      id: 8,
      title: "Evo Fitness GYM Website ",
      // date: "January 2022 - Present",
      responsibilities: [
        "It showcases the features and services offered by the gym, including classes, benefits, and contact information",
        "Built application using TypeScript, React, and Framer Motion",
      ],
      gitUrl: "https://github.com/PalampalliPraneeth/Gym-Website",
      webUrl: "https://evo-gym-fitness.vercel.app/"
    },
    {
      id: 9,
      title: "Wordle Clone ",
      // date: "January 2022 - Present",
      responsibilities: [
        "Wordle Clone is a web-based game inspired by the popular word-guessing game Wordle.",
        "Built application using React.js",
      ],
      gitUrl: "https://github.com/PalampalliPraneeth/Wordle-Clone",
      webUrl: "https://wordle-clone-95um.vercel.app/"
    },
    {
      id: 10,
      title: "Weather Application",
      // date: "January 2022 - Present",
      responsibilities: [
        "A simple weather application built with React that allows users to get the current weather information for a specific location",
        "The app fetches weather data from the OpenWeatherMap API",
      ],
      gitUrl: "https://github.com/PalampalliPraneeth/Weather-application",
      webUrl: "https://weather-application-beta-self.vercel.app/"
    },
];
