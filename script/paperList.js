paperL = [];
paperL["q learning"] = [
    ["deep q net raw pixel", "Playing Atari with Deep Reinforcement Learning", "Mnih et al."], 
    ["deep q recurrent net", "Deep Recurrent Q-Learning for Partially Observable MDPs", "Hausknecht and Stone"], 
    ["human level", "Human-level control through deep reinforcement learning", "Mnih et al."]
];
paperL["policy gradient"] = [
    ["trust region policy optimization", "Trust Region Policy Optimization", "Schulman et al."], 
    ["proximal policy optimization", "Proximal Policy Optimization Algorithms", "Schulman et al."], 
    ["policy gradient theorem", "Policy Gradient Beamer", "Ashwin Rao"], 
    ["policy gradient theorem paper", "Policy Gradient Methods for Reinforcement Learning with Function Approximation", "Sutton et al."], 
    ["deterministic pg", "Deterministic Policy Gradient Algorithms", "Silver et al."], 
    ["deterministic pg proof", "Deterministic Policy Gradient Algorithms: Supplementary Material", "Silver et al."], 
    ["generalised advantage estimation", "High-Demensional Continuous Control Using Generalized Advantage Estimation", "Schulman et al."], 
    ["comparing policy gradient", "Comparing Policy-Gradient Algorithms", "Sutton et al."], 
    ["a3c", "Asynchronous Methods for Deep Reinforcement Learning", "Mnih et al."]
];
paperL["evolutionary strategy"] = [
    ["Neural Genetic Evolution", "Genetic Lander: An Experiement in Accurate Neuro-Genetic Control", "Ronald and Schoenauer"], 
    ["evolution strategies RL", "Evolution Strategies as a Scalable Alternative to Reinforcement Learning", "Salimans et al."], 
    ["CMA-ES", "The CMA Evolution Strategy: A Tutorial", "Nikolaus Hansen"], 
    ["Evolutionary Algorithm RNN", "An Evolutionary Algorithm that Constructs Recurrent Neural Networks", "Angeline et al."]
];
paperL["hierarchy"] = [
    ["options", "Learning Options in Reinforcement Learning", "Stolle and Precup"], 
    ["intra option learning", "Intra-Option Learning about Temporally Abstract Actions", "Sutton et al."], 
    ["nn and options", "Hierarchical Reinforcement Learning with Options and United Neural Network Approximation", "Kuzmin and Panov"], 
    ["option critic", "The Option-Critic Architecture", "Bacon et al."], 
    ["option critic continuous", "Learnings Options End-to-End for Continuous Action Tasks", "Klissarov et al."], 
    ["deliberation cost", "When Waiting Is Not an Option: Learning Options with a Deliberation Cost", "Harb and Bacon et al."], 
    ["option critic interest function", "Options of Interest: Temporal Abstraction with Interest Functions", "Khetarpal et al."], 
    ["interest option critic appendix", "Options of Interest: Temporal Abstraction with Interest Functions: Appendix", "Khetarpal et al."], 
    ["attention_option_critic", "Attention Option-Critic", "Chunduru and Precup"], 
    ["hams", "Reinforcement Learning with Hierarchies of Machines", "Parr and Russell"], 
    ["deep skill chaining", "Option Discovery Using Deep Skill Chaining", "Bagaria and Konidaris"], 
    ["option and intrinsic", "Hierarchical Deep Reinforcement Learning: Integrating Temporal Abstraction and Intrinsic Motivation", "Kulkarni and Narasimhan et al."], 
    ["termination critic", "The Termination Critic", "Harutyunyan et al."]
];
paperL["multi agent"] = [
    ["td gammon", "Temporal Difference Learning and TD-Gammon", "Gerald Tesauro"], 
    ["alpha go", "Mastering the Game of Go without Human Knowledge", "Silver et al."], 
    ["open ai self play", "Emergent Complexity via Multi-Agent Competition", "Bansal et al."], 
    ["open ai emergent tool use", "Emergent Tool Use From Multi-Agent Autocurricula", "OpenAI"], 
    ["adversarial policy", "Adversarial Policies: Attacking Deep Reinforcement Learning", "Gleave et al."]
];
paperL["architecture"] = [
    ["batch norm", "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift", "Ioffe and Szegedy"], 
    ["dropout", "Improving neural networks by preventing co-adaptation of feature detectors", "Hinton et al."], 
    ["dropout more info", "Dropout: A Simple Way to Prevent Neural Networks from Overfitting", "Srivastava et al."], 
    ["dilution and asymmetry", "Network dilution and asymmetry in an efficient brain", "Leonetti et al."], 
    ["show attend and tell", "Show, Attend and Tell: Neural Image Caption Generation with Visual Attention", "Xu et al."], 
    ["GAN", "Generative Adversarial Nets", "Goodfellow et al."]
];
paperL["curiosity"] = [
    ["curiosity", "Curiosity-driven Exploration by Self-supervised Prediction", "Pathak et al."], 
    ["intrinsic motivation", "Intrinsically Motivated Reinforcement Learning", "Singh et al."]
];
paperL["analysis"] = [
    ["func appr converge to a region", "Reinforcement Learning with Function Approximation Converges to a Region", "Geoffrey Gordon"], 
    ["td learning w func appr", "An Analysis of Temporal-Difference Learning with Function Approximation", "Tsitsiklis and Roy"], 
    ["Bias_and_Variance_Approximation_in_Value_Function_", "Bias and Variance Approximation in Value Function Estimates", "Mannor et al."]
];
paperL["safety"] = [
    ["concrete problems in safety", "Concrete Problems in AI Safety", "Amodei and Olah et al."]
];
paperL["transfer"] = [
    ["domain randomization", "Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World", "Tobin et al."], 
    ["rubiks cube dexterity", "Solving Rubik’s Cube With a Robot Hand", "OpenAI"], 
    ["quantify generalization", "Quantifying Generalization in Reinforcement Learning", "Cobbe et al."]
];

function loadPaper(category){
    let papers = paperL[category];
    let parent = document.getElementById("page");
    let before = document.getElementById("before");
    for (let i = 0; i < papers.length; i++){
        let state = (i % 2 == 0)? "odd" : "even";
        let currPaper = papers[i];

        let href = document.createElement("A");
        href.target = "_blank";
        href.href = "../"+category+"/"+currPaper[0]+".pdf";

        let container = document.createElement("DIV");
        container.classList.add("paper");
        container.classList.add(state);

        let title = document.createElement("DIV");
        title.classList.add("title");
        title.textContent = currPaper[1];

        let author = document.createElement("DIV");
        author.classList.add("author");
        author.textContent = currPaper[2];

        container.appendChild(title);
        container.appendChild(author);
        href.appendChild(container);
        parent.insertBefore(href, before);
    }
    setUpBar();
}