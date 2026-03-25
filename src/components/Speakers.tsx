import React from "react";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import "../assets/styles/Main.scss";

interface ScheduleProps {
  mode: "light" | "dark";
}

const Speakers: React.FC<ScheduleProps> = ({ mode }) => {
  const speakers = [
    {
      name: "Luca Calatroni",
      img: "./speakers/calatroni.jpeg",
      bio: "Associate professor - MaLGa centre, Department of Computer Science, Università degli studi di Genova",
      title: "Optimisation-driven deep learning for image reconstruction",
      abstract:
        "Recent advances in machine learning and deep learning have revolutionised the study of applied inverse problems and computer vision. Although these data-driven methods often outperform classical reconstruction techniques grounded in tailored modelling and expert knowledge, they frequently lack rigorous mathematical guarantees. In this talk, I will discuss how hybrid approaches that integrate physical models with learned regularisation can bridge this gap, offering a balanced combination of interpretability, reliability, and performance. I will focus in particular on convergent hybrid methods formulated as extensions of classical optimisation schemes (such as proximal gradient methods and bilevel optimisation approaches), in which the physical forward model is enforced explicitly while the prior is learned from data. As an application, I will demonstrate how these techniques can be effectively employed for image reconstruction in fluorescence microscopy, particularly in regimes with limited photon counts.",
    },
    {
      name: "Monica Montardini",
      img: "./speakers/montardini.jpg",
      bio: "RTT - Università degli studi di Pavia",
      title: "Low-rank methods in Isogeometric Analysis",
      abstract:
        "The numerical solution of Partial Differential Equations with standard approaches suffers from the so-called curse of dimensionality: the memory storage and the computational effort grow exponentially with respect to the dimension  d of the problem.  On a single-patch domain, this is typically O(n^d), where n is the number of degrees of freedom in each univariate direction. As a remedy, in this talk we combine Isogeometric Analysis with low-rank techniques, allowing  an overall computational cost and memory footprint that is proportional to n. First, we approximate the equation's coefficients, including those stemming from the geometry mapping, with a sum of few separable functions. We then consider an iterative Krylov solver with tensor rank truncations combined with a novel preconditioning strategy, that is robust with respect to the relevant parameters. The preconditioner is based on the Fast Diagonalization method, that is recast to be compatible to the chosen tensor format. This low-rank technique and the preconditioning strategy can be extended to multipatch geometries, using an overlapping Schwarz method where the subdomains can be defined as unions of neighbouring patches.",
    },
    {
      name: "Cecilia Pagliantini",
      img: "./speakers/CeciliaPagliantini.png",
      bio: "RTDb - Dipartimento di Matematica, Università di Pisa",
      title:
        "Dynamical approximation and sensor placement for the state estimation of conservative dynamics",
      abstract:
        "This talk focuses on the inverse problem of reconstructing an unknown function $u$ from a finite set of measurements, under the assumption that $u$ is the output of a parametric differential equation with unknown input parameters. Typically, the target function $u$ belongs to an infinite-dimensional Hilbert space and the geometry of the solution set $M$ is not known a priori. One way to reduce the complexity of the problem is to approximate $M$ by a linear, finite dimensional subspace $V$ using model order reduction, and to search for an approximation $u^{\\star}\\in V$ to the state $u$. It is however known that such an approach becomes ineffective for approximating the dynamics of conservative systems. In this talk we will discuss how to address inverse problems for transport and wave phenomena in the framework of Hamiltonian systems. The method combines symplectic dynamical low-rank approximation to update $V$ with dynamical placement of the sensors to ensure an accurate reconstruction at all times.",
    },
    {
      name: "Francesco Regazzoni",
      img: "https://regazzoni.faculty.polimi.it/authors/admin/avatar_huf4c942cac3489e2b50543501689d71ec_28766_150x150_fill_q75_lanczos_center.jpg",
      bio: "Associate Professor at MOX - Dipartimento di Matematica, Politecnico di Milano",
      title:
        "Challenges and advances in multiphysics coupling, with applications in cardiac modeling",
      abstract:
        "Multiphysics coupling arises in many scientific and engineering applications and poses significant challenges in balancing computational efficiency with accuracy. Examples include sub-physics characterized by different requirements in terms of mesh size and polynomial degree, which call for transferring coupling variables across independent meshes in an effective and structure-preserving manner; time-integration instabilities that emerge when loosely coupled schemes are employed as a more convenient alternative to fully monolithic approaches; and spatial accuracy issues that arise when dealing with non-matching meshes. In this talk, we consider cardiac simulation as a paradigmatic example of a complex multiphysics problem, both because of its societal impact and because of the numerous numerical challenges it raises. Indeed, clinical translation in this context is often hindered by the computational costs, which prevent a sustainable integration of in silico simulations within healthcare systems.",
    },
    {
      name: "Davide Torlo",
      img: "./speakers/Torlo_SISSA_keynote.jpg",
      bio: "RTT - Sapienza Università di Roma",
      title:
        "How to Preserve Moving Equilibria for Hyperbolic Balance Laws with the Global Flux Quadrature",
      abstract:
        "Many conservation and balance laws admit families of moving steady states that are crucial to preserve at the numerical level. While several techniques have been developed to achieve this in one dimension, few are available for multidimensional problems, and those often apply only to linear cases. The so-called Global Flux approach integrates multiple terms into a single physical flux, yielding a unified differential operator acting on a more complex flux function. This formulation enables highly accurate discrete equilibria that correspond to exact continuous steady states. In finite element methods, these discrete equilibria exhibit superconvergence properties, allowing for very precise perturbation analyses. Despite its name, the Global Flux method leads to compact numerical stencils and can be reformulated as specific discrete derivative and source terms. We apply the method to various systems — including the acoustic, shallow water, Euler, and Maxwell equations, with and without source terms — demonstrating its ability to preserve a broad class of genuinely multidimensional equilibria.",
    },
  ];

  const organisers = {
    "Organising Committee": [
      {
        name: "Davide Carrara",
        img: "./people/davide.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Luca Sosta",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100089_38.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Giovanni Ziarelli",
        img: "https://www.mate.polimi.it/servizi/webspace/img/734_25.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Luca Formaggia",
        img: "https://www.mate.polimi.it/servizi/webspace/img/142.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
    ],
    "Local Organisers": [
      {
        name: "Francesca Arceci",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100131_30.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Samuele Brunati",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100103_74.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Giacomo Lorenzon",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100135_98.png",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Simone Panzeri",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100008_40.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Valentina Pederzoli",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100079_83.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Riccardo Petrucci",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100109_54.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Erika Temellini",
        img: "https://www.mate.polimi.it/servizi/webspace/img/737_65.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Piermario Vitullo",
        img: "https://www.mate.polimi.it/servizi/webspace/img/735_79.jpeg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Filippo Zacchei",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100048_69.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
    ],
    "Representatives of other SIAM Chapters": [
      {
        name: "Luca Calatroni",
        img: "./speakers/calatroni.jpeg",
        affiliation: "MaLGa Center, DIBRIS, Università di Genova, IIT",
      },
      {
        name: "Nikita Deniskin",
        img: "./people/nikita.jpg",
        affiliation: "Classe di Scienze, Scuola Normale Superiore di Pisa",
      },
      {
        name: "Giulia Formenton",
        img: "./people/Giulia_Formenton.jpg",
        affiliation:
          "Dipartimento di Ingegneria Civile e Architettura, Università di Pavia",
      },
      {
        name: "Isabella Carla Gonnella",
        img: "./people/IsabellaCarlaGonnella.jpg",
        affiliation: "mathLab, SISSA",
      },
      {
        name: "Federica Mugnaioni",
        img: "./people/federica.png",
        affiliation: "Classe di Scienze, Scuola Normale Superiore di Pisa",
      },
      {
        name: "Guglielmo Padula",
        img: "./people/GuglielmoPadula.jpg",
        affiliation: "mathLab, SISSA",
      },
      {
        name: "Veronica Pignedoli",
        img: "./people/pignedoli.jpg",
        affiliation: "MaLGa Center, DIBRIS, Università di Genova",
      },
      {
        name: "Davide Polverino",
        img: "./people/davidep.jpeg",
        affiliation: "Dipartimento di Matematica, Università di Pisa",
      },
      {
        name: "Simone Sanna",
        img: "./people/S_Sanna.jpg",
        affiliation: "MaLGa Center, DIMA, Università di Genova",
      },
      {
        name: "Davide Terazzi",
        img: "./people/Davide_Terazzi.jpeg",
        affiliation: "Dipartimento di Matematica, Università di Pavia",
      },
      {
        name: "Lorenzo Tomada",
        img: "./people/LorenzoTomada.jpg",
        affiliation: "mathLab, SISSA",
      },
      {
        name: "Sofia Tonali",
        img: "./people/Sofia_Tonali.jpeg",
        affiliation: "Dipartimento di Matematica, Università di Pavia",
      },
    ],
  };

  const contributedTalks = [
    {
      name: "Simone Accogli",
      title:
        "Modeling and simulation of multi-agent systems with stochastic and target-oriented dynamics",
      affiliation: "University of Pavia",
    },
    {
      name: "Maria Roberta Belardo",
      title: "Optimal Convergence in Least-Squares Isogeometric Collocation",
      affiliation: "Scuola Superiore Meridionale",
    },
    {
      name: "Viola Cusumano",
      title: "Calibration of a Mathematical Model for Cardiac Perfusion",
      affiliation: "Centro Cardiologico Monzino",
    },
    {
      name: "Caterina Dalmaso",
      title:
        "An integrated 1D-0D model of the cardiorespiratory system with local autoregulation",
      affiliation: "University of Trento",
    },
    {
      name: "Christian Daniele",
      title:
        "Deep Equilibrium models for Poisson Inverse Problems via Mirror Descent",
      affiliation: "Università di Genova",
    },
    {
      name: "Valeria Fiori",
      title: "Region-Constrained RBPF for MEG source localisation",
      affiliation: "Università di Genova",
    },
    {
      name: "Isabella Carla Gonnella",
      title:
        "Dynamical Reduced Order Approximation of Wasserstein Gradient Flows",
      affiliation: "SISSA",
    },
    {
      name: "Hippolyte Labarrière",
      title: "On the Role of Overparameterization in Optimization Dynamics",
      affiliation: "Università degli Studi di Genova",
    },
    {
      name: "Caterina Beatrice Leimer Saglio",
      title:
        "A p-adaptive high-order polytopal method for modelling neuronal electrophysiology",
      affiliation: "Politecnico di Milano",
    },
    {
      name: "Marco Desiderio Loffredo Senesi",
      title:
        "An entropic lattice boltzmann method for wettability control via coupled boundary-force interpolation",
      affiliation: "Politecnico di Bari",
    },
    {
      name: "Chiara Lonati",
      title: "Poroelasticity for intrinsically incompressible constituents",
      affiliation: "Politecnico di Torino",
    },
    {
      name: "Armando Monforte",
      title:
        "TMATDG: applying TDG methods to multiple scattering via T-matrix approximation",
      affiliation: "University of Pavia",
    },
    {
      name: "Federica Mugnaioni",
      title:
        "Preconditioning techniques for fictitious domain formulations of elliptic interface problems",
      affiliation: "Scuola Normale Superiore",
    },
    {
      name: "Alessandro Palummo",
      title:
        "Fast physics-informed spatio-temporal smoothing with time-indexed elliptic operators",
      affiliation: "Politecnico di Milano",
    },
    {
      name: "Giuseppe Scarlato",
      title:
        "A Preconditioned Version of a Nested Primal-Dual Algorithm for Image Deblurring",
      affiliation: "Università degli Studi dell'Insubria",
    },
    {
      name: "Giacomo Speroni",
      title:
        "From multi-physics topology optimization to 3D-printed porous scaffolds for soilless cultivation",
      affiliation: "Politecnico di Milano",
    },
    {
      name: "Barbara Tarantino",
      title: "CAuSe–AI: Evaluating the Reasoning of Deep Learning Models",
      affiliation: "University of Pavia",
    },
    {
      name: "Lorenzo Tomada",
      title:
        "Latent Dynamics Graph Convolutional Networks for model order reduction of parameterized time-dependent PDEs",
      affiliation: "SISSA",
    },
    {
      name: "Matteo Tomasetto",
      title:
        "Sparse sensing is all you need: real-time simulation and optimal control of high-dimensional parametric systems",
      affiliation: "Politecnico di Milano",
    },
    {
      name: "Ilaria Trombini",
      title:
        "Stochastic algorithm for the 3D Computed Tomography (CT) problems",
      affiliation: "University of Ferrara",
    },
    {
      name: "Carmine Valentino",
      title: "PINNs and ROMs for predictive maintenance of cultural heritage",
      affiliation: "University of Salerno",
    },
  ];

  const posterContributions = [
    {
      name: "Sofia Agostoni",
      title: "Regularization approaches in Image Scanning Microscopy (ISM)",
      affiliation: "Università di Genova",
    },
    {
      name: "Paolo Angella",
      title:
        "Infinite-Dimensional Generative Compressed Sensing via Coherence-Based Sampling",
      affiliation: "Università di Genova",
    },
    {
      name: "Narges Araboljadidi",
      title:
        "Barzilai-Borwein Step Sizes for Incremental Gradient Methods in Non-Smooth Optimization",
      affiliation: "Università degli Studi della Campania",
    },
    {
      name: "Maryam Bavafaye Semiromi",
      title:
        "Fine-tuning a deep learning-based system for predicting drivers’ lane change behavior",
      affiliation: "Università di Genova",
    },
    {
      name: "Ester Bergantin",
      title:
        "Personalized Multiscale Cardiovascular Modelling of Electrical Dyssynchrony Using Constraint Bayesian Optimization",
      affiliation: "Università di Trento",
    },
    {
      name: "Paolo Botta",
      title:
        "Learning Vascular Hemodynamics: Physics-Informed GNNs Inference from Capillary Networks to Pulsatile Flow",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Giacomo Bottacini",
      title:
        "Neural Markov chain Monte Carlo: Likelihood density estimation via normalizing flows and variational autoencoders",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Simone Brivio",
      title:
        "When Deep Autoencoders meet the Eckart-Young-Schmidt theorem: error analysis and initialization strategies",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Giuseppe Carrino",
      title:
        "Numerical frugality in optimization: mixed-precision Newton's method",
      affiliation: "ENS Lyon",
    },
    {
      name: "Dario Coscia, Giovanni Canali",
      title: "PINA: A Unified Framework for Scientific Machine Learning",
      affiliation: "SISSA",
    },
    {
      name: "Marco Francesco De Sanctis",
      title: "PDE-Regularized Regression for Heterogeneous Air Quality Data",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Marco Dell'Orto",
      title: "Algebraic Issues Arising in Training Deep Operator Networks",
      affiliation: "Università di Padova",
    },
    {
      name: "Ilenia Di Battista",
      title:
        "Modeling Anisotropy via PDE Penalization: Application to Urban Mobility",
      affiliation: "Politecnico di Milano",
    },
    {
      name: "Arsenii Dokuchaev",
      title: "Reconstruction of Cardiac Lead Fields Using Auto-Decoders",
      affiliation: "Università di Trento",
    },
    {
      name: "Nicola Farenga",
      title:
        "Time-continuous latent dynamics learning for nonlinear reduced order modeling",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Sara Gazzoni",
      title:
        "Patient Specific Prediction of Glioblastoma Growth via Reduced Order Modeling and Neural Networks",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Alfredo Gimenez Zapiola",
      title: "Random Set Point Processes for Space Mining",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Giulia Guicciardi",
      title:
        "A Multiscale Kinetic–Hydrodynamic Framework for Image Segmentation",
      affiliation: "Università di Pavia",
    },
    {
      name: "Fadil-Rahman Intahim",
      title:
        "A Feasibility-Correction Framework for Learning-Based Optimization",
      affiliation: "Georgia State University",
    },
    {
      name: "Bianca Maria Laudenzi",
      title:
        "Mathematical Modeling of Cardiogenic Shock: Towards a Patient-Specific Simulation Framework for Therapy Optimization",
      affiliation: "Università di Trento",
    },
    {
      name: "Gaspare Li Causi",
      title: "SymmetricConvolutional AutoEncoders for model order reduction",
      affiliation: "SISSA",
    },
    {
      name: "Cristina Macaluso",
      title:
        "Modelling of the interplay between vascular architecture and cancer cell plasticity under radiotherapy",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Francesco Maria Mancinelli",
      title:
        "A multi-agent digital twin for decision-making in market dynamics through active inference",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Erfan Mirzaei",
      title:
        "Thermodynamics Reveals the Generalization in the Interpolation Regime",
      affiliation: "Italian Institute of Technology",
    },
    {
      name: "Andrea Munno, Jacopo Senoner",
      title:
        "Robust FEM and Linearization Strategies for Non-Newtonian Fluids",
      affiliation: "Politecnico di Milano",
    },
    {
      name: "Davide Oberto",
      title:
        "Hybrid resolution strategies for reduced models with high Kolmogorov n-width",
      affiliation: "SISSA",
    },
    {
      name: "Guglielmo Padula",
      title:
        "Generative models for Shape Deformation and Reduced Order Modelling",
      affiliation: "SISSA",
    },
    {
      name: "Valentina Pederzoli",
      title:
        "A coupled mathematical and numerical model for protein spreading and tissue atrophy applied to Alzheimer's disease",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
    {
      name: "Federico Maria Quetti",
      title: "Bayesian Ensemble Forest for Anomaly Detection",
      affiliation: "Università di Pavia",
    },
    {
      name: "Lorenzo Tedesco",
      title:
        "Nonparametric estimation of conditional probability distributions using a generative approach based on conditional push-forward neural networks",
      affiliation: "Università of Bergamo",
    },
    {
      name: "Horacio Tettamanti",
      title:
        "Structure Preserving Multiscale Methods for Supercritical Fokker-Planck Equations",
      affiliation: "Università di Pavia",
    },
    {
      name: "Giacomo Venier",
      title:
        "A stochastic investigation of bifurcating phenomena via Polynomial Chaos Expansion",
      affiliation: "SISSA",
    },
    {
      name: "Xiaolin Xing",
      title:
        "Evaluating the Accuracy of Monocular 3D Pose Estimation for Gait Analysis",
      affiliation: "Università di Genova",
    },
    {
      name: "Filippo Zacchei",
      title:
        "Multi-Fidelity SINDy: Sparse Discovery of Nonlinear Dynamical Systems with Fidelity-Weighted Measurements",
      affiliation: "MOX, Dipartimento di Matematica - Politecnico di Milano",
    },
  ];

  return (
    <>
      <div className={`speakers-section ${mode}`} id="speakers">
        <h2>Keynote Talks</h2>
        <div className="speakers-grid">
          {speakers.map((s, i) => (
            <div key={i} className="speaker-card">
              <div className="top">
                <img src={s.img} alt={s.name} className="speaker-img" />
                <div className="bio">
                  <h3>{s.name}</h3>
                  <p>{s.bio}</p>
                </div>
              </div>

              {/* ===== TALK TITLE ADDED HERE ===== */}
              <div className="talk-title">
                <h4>{s.title}</h4>
              </div>

              <div className="abstract">
                <h4>Abstract</h4>
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {s.abstract}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contributed">
        <h2>Contributed and Invited Talks</h2>

        <ul className="contributed-list">
          {contributedTalks.map((t, i) => (
            <li key={i} className="contributed-item">
              <strong>{t.name}</strong>
              {", "} {t.affiliation}
              {": "}
              <em>{t.title}</em>.
            </li>
          ))}
        </ul>
      </div>

      <div className="contributed">
        <h2>Poster Session Contributions</h2>

        <ul className="poster-list">
          {posterContributions.map((t, i) => (
            <li key={i} className="contributed-item">
              <strong>{t.name}</strong>
              {", "} {t.affiliation}
              {": "}
              <em>{t.title}</em>.
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Organisers Section ===== */}
      <div className="organisers" id="organisers">
        <h2>Organisers</h2>

        {Object.entries(organisers).map(([title, members], i) => (
          <div key={i} className="organiser-group">
            <h3>{title}</h3>

            <ul className="committee-list">
              {members.map((m, j) => (
                <li key={j} className="member">
                  <img src={m.img} alt={m.name} className="member-photo" />
                  <div className="member-info">
                    <strong>{m.name}</strong>
                    <div className="affiliation">{m.affiliation}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Speakers;
