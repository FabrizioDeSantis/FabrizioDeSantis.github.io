// Publications shown on the home page, newest first.
// Each entry holds everything needed for both the list and its BibTeX:
//   venue    label shown above the title
//   title    paper title
//   url      link to the paper (optional)
//   authors  [first, last] pairs, so multi-word surnames ("De Santis") stay intact in BibTeX
//   year     publication year
//   bib      BibTeX entry type, citation key and any extra fields (booktitle, journal, doi, ...)
window.PUBLICATIONS = [
    {
        venue: 'BPM 2026',
        title: 'Fairness in Prescriptive Process Analytics: Integrating Fairness Constraints into the Learning Phase',
        url: 'https://link.springer.com/chapter/10.1007/978-3-032-37777-7_23',
        authors: [['Fabrizio', 'De Santis'], ['Alessandro', 'Padella'], ['Gyunam', 'Park'], ['Francesco', 'Zanichelli'], ['Massimiliano', 'de Leoni']],
        year: 2026,
        bib: {
            type: 'inproceedings',
            key: 'desantis2026fairness',
            booktitle: 'Business Process Management (BPM 2026)',
            series: 'Lecture Notes in Computer Science',
            publisher: 'Springer',
            doi: '10.1007/978-3-032-37777-7_23'
        }
    },
    {
        venue: 'CAiSE 2026',
        title: 'Compliance-Aware Predictive Process Monitoring: A Neuro-Symbolic Approach',
        url: 'https://link.springer.com/chapter/10.1007/978-3-032-28117-3_13',
        authors: [['Fabrizio', 'De Santis'], ['Gyunam', 'Park'], ['Wil M.P.', 'van der Aalst'], ['Francesco', 'Zanichelli']],
        year: 2026,
        bib: {
            type: 'inproceedings',
            key: 'desantis2026compliance',
            booktitle: 'Advanced Information Systems Engineering (CAiSE 2026)',
            series: 'Lecture Notes in Computer Science',
            publisher: 'Springer',
            doi: '10.1007/978-3-032-28117-3_13'
        }
    },
    {
        venue: 'PAKDD 2026',
        title: 'Neuro-Symbolic Learning for Predictive Process Monitoring via Two-Stage Logic Tensor Networks with Rule Pruning',
        url: 'https://link.springer.com/chapter/10.1007/978-981-92-1462-4_9',
        authors: [['Fabrizio', 'De Santis'], ['Gyunam', 'Park'], ['Francesco', 'Zanichelli']],
        year: 2026,
        bib: {
            type: 'inproceedings',
            key: 'desantis2026neurosymbolic',
            booktitle: 'Advances in Knowledge Discovery and Data Mining (PAKDD 2026)',
            series: 'Lecture Notes in Computer Science',
            publisher: 'Springer',
            doi: '10.1007/978-981-92-1462-4_9'
        }
    },
    {
        venue: 'SynIRgy Workshop at ECIR 2026',
        title: 'AMBER: A Modular Evaluation Pipeline for Business-Oriented Recommender Systems',
        authors: [['Francesca', 'Stefano'], ['Qian Hua', 'Ma'], ['Fabrizio', 'De Santis'], ['Francesco', 'Zanichelli']],
        year: 2026,
        bib: {
            type: 'inproceedings',
            key: 'stefano2026amber',
            booktitle: 'Proceedings of the SynIRgy Workshop at ECIR 2026'
        }
    },
    {
        venue: 'Engineering Applications of Artificial Intelligence',
        title: 'Neuro-symbolic artificial intelligence for real-time sepsis mortality prediction',
        url: 'https://www.sciencedirect.com/science/article/pii/S0952197626012029',
        authors: [['Fabrizio', 'De Santis'], ['Gyunam', 'Park'], ['Francesco', 'Zanichelli']],
        year: 2026,
        bib: {
            type: 'article',
            key: 'desantis2026sepsis',
            journal: 'Engineering Applications of Artificial Intelligence',
            publisher: 'Elsevier'
        }
    }
];
