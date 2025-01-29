import './App.css';
import Divider from '@material-ui/core/Divider';

function Resume() {
    return (
      <div className="App">
        <header align="left"  className="content_page">
          <h1 className="content_page"> Education </h1>
          <Divider />
          <p>
            <a href='https://csd.cmu.edu/' target="_blank" rel="noreferrer"><b>Carnegie Mellon University, Computer Science Department</b></a> <b><i>(Aug. 2021 - present)</i></b> <br />
            Pursuing PhD in Computer Science <br />
            <i>NSF Graduate Research Fellowship</i> <br />
          </p>
          <p>
            <a href='https://ku.edu/' target="_blank" rel="noreferrer"><b>University of Kansas</b></a> <b><i>(Aug. 2017 - May 2021)</i></b> <br />
            B.S. Computer Science, B.S. Mathematics, Minor in Visual Arts <br />
            <i>The Outstanding Senior in Computer Science</i> <br />
          </p>
          <br />
          <h1 className="content_page"> Experience </h1>
          <Divider />
          <p>
            <b>Carnegie Mellon University <i>(Fall 2024)</i></b> <br />
            <i>Teaching Assistant <span>&#8226;</span> Foundations of Security and Privacy</i> <br />
          </p>
          <p>
            <b>Carnegie Mellon University <i>(Spring 2023)</i></b> <br />
            <i>Teaching Assistant <span>&#8226;</span> Bug Catching: Automated Program Verification</i> <br />
          </p>
          <p>
            <a href='https://www.cmu.edu/scs/isr/reuse/' target="_blank" rel="noreferrer"><b>NSF REU in Software Engineering at Carnegie Mellon University</b></a> <b><i>(Summer 2020)</i></b> <br />
            <i>Research Intern <span>&#8226;</span> <a href='https://www.raml.co/' target="_blank" rel="noreferrer">Resource Aware ML</a></i> <br />
          </p>
          <p>
            <b>University of Kansas <i>(Aug. 2018 - Dec. 2020)</i></b> <br />
            <i>Undergraduate Research Assistant <span>&#8226;</span> Scientific Computing (High-Order Meshing)</i> <br />
          </p>
          <p>
            <b>University of Kansas <i>(Fall 2018, Spring 2019, Spring 2020)</i></b> <br />
            <i>Undergraduate Teaching Assistant <span>&#8226;</span> Programming II</i> <br />
          </p>
          <p>
            <b>University of Kansas <i>(Fall 2019)</i></b> <br />
            <i>Undergraduate Teaching Assistant <span>&#8226;</span> Programming I</i> <br />
          </p>
          <p>
            <a href='https://www.garmin.com/en-US/' target="_blank" rel="noreferrer"><b>Garmin International</b></a> <b><i>(Summer 2019)</i></b> <br />
            <i>Software Engineering Intern <span>&#8226;</span> Consumer Automotive (PND)</i> <br />
          </p>
          <br />
          <h1 className="content_page"> Publications and Selected Presentations </h1>
          <Divider />
          <p>
            <b>Modal Crash Types for WAR-Aware Intermittent Computing <i>(January 2025)</i></b> <br />
            <i><b>Myra Dotzel</b>, Farzaneh Derakhshan, Milijana Surbatovich, Limin Jia <span>&#8226;</span> <a>Paper</a> <span>&#8226;</span> TOPLAS (to appear) </i> <br />
          </p>
          <p>
            <b>Modal Crash Types for Intermittent Computing <i>(November 2024)</i></b> <br />
            <i><b>Myra Dotzel</b>, Farzaneh Derakhshan, Milijana Surbatovich, Limin Jia <span>&#8226;</span> <a href='papers/crash_types_KU_24.pdf' target="_blank" rel="noreferrer">Research Talk</a> <span>&#8226;</span> University of Kansas I2S Speaker Series <span>&#8226;</span> Lawrence, Kansas </i> <br />
          </p>
          <p>
            <b>Correctness of Intermittent Executions via Modal Crash Types <i>(October 2023)</i></b> <br />
            <i><b>Myra Dotzel</b>, Farzaneh Derakhshan, Milijana Surbatovich, Limin Jia <span>&#8226;</span> <a href='papers/MWPLS_23_talk.pdf' target="_blank" rel="noreferrer">Research Talk</a> <span>&#8226;</span> Midwest PL Summit 2023 <span>&#8226;</span> Ann Arbor, Michigan </i> <br />
          </p>
          <p>
            <b>Modal Crash Types for Intermittent Computing <i>(April 2023)</i></b> <br />
            <i>Farzaneh Derakhshan, <b>Myra Dotzel</b>, Milijana Surbatovich, Limin Jia <span>&#8226;</span> <a href='papers/crash_types.pdf' target="_blank" rel="noreferrer">Paper</a> <span>&#8226;</span> <a href='papers/crash_types_tech_report.pdf' target="_blank" rel="noreferrer">Technical Report</a> <span>&#8226;</span> ESOP 2023 <span>&#8226;</span> Paris, France </i> <br />
          </p>
          <p>
            <b>Assessing Edge Tangling in High-Order Mesh Elements <i>(March 2021)</i></b> <br />
            <i><b>Myra Dotzel</b>, Suzanne Shontz <span>&#8226;</span> Poster <span>&#8226;</span> SIAM CSE 2021 <span>&#8226;</span> Virtual </i> <br />
          </p>
          <p>
            <b>Untangling High-Order Meshes Based on Signed Angles <i>(October 2019)</i></b> <br />
            <i>Michael Stees, <b>Myra Dotzel</b>, Suzanne Shontz <span>&#8226;</span> <a href='papers/18-Stees.pdf' target="_blank" rel="noreferrer">Paper</a> <span>&#8226;</span> The 28th IMR <span>&#8226;</span> Buffalo, NY </i> <br />
          </p>
          <p>
            <b>Evaluating Tangling in High-Order Meshes with Tangent Vectors <i>(February 2019)</i></b> <br />
            <i><b>Myra Dotzel</b>, Michael Stees, Suzanne Shontz <span>&#8226;</span> Research Talk <span>&#8226;</span> SIAM CSE 2019 <span>&#8226;</span> Spokane, WA </i> <br />
          </p>
          <br />

          <h1 className="content_page"> Service </h1>
          <Divider />
          <ul>
            <li><b>ESOP 2023</b> Student Volunteer</li>
            <li><b>POPL 2023</b> Student Volunteer</li>
            <li><b>CMU CSD PhD Student Council</b></li>
          </ul>

          <br />
          <h1 className="content_page"> Awards, Scholarships, and Grants </h1>
          <Divider />
          <p>
            <a href='https://mwpls2023.engin.umich.edu' target="_blank" rel="noreferrer"><b>Midwest PL Summit Travel Award</b></a> <b><i>(October 2023)</i></b> <br />
            <i>University of Michigan</i> <br />
          </p>
          <p>
            <a href='https://www.cs.uoregon.edu/research/summerschool/summer22/index.php' target="_blank" rel="noreferrer"><b>Oregon Programming Languages Summer School Fellowship Grant</b></a> <b><i>(June 2022)</i></b> <br />
            <i>University of Oregon</i> <br />
          </p>
          <p>
            <a href='https://cra.org/cra-wp/grad-cohort-for-women/' target="_blank" rel="noreferrer"><b>CRA-WP Grad Cohort</b></a> <b><i>(April 2022)</i></b> <br />
            <i>Carnegie Mellon University</i> <br />
          </p>
          <p>
            <a href='https://www.nsfgrfp.org' target="_blank" rel="noreferrer"><b>National Science Foundation Graduate Research Fellowship</b></a> <b><i>(April 2022)</i></b> <br />
            <i>Carnegie Mellon University</i> <br />
          </p>
          <p>
            <a href='https://popl22.sigplan.org/home/PLMW-2022#program' target="_blank" rel="noreferrer"><b>POPL PLMW Travel Award</b></a> <b><i>(January 2022)</i></b> <br />
            <i>Carnegie Mellon University</i> <br />
          </p>
          <p>
          <b>2nd place, <a href="https://lfcps.org/course/lfcps-projects.html" target="_blank" rel="noreferrer">Logical Foundations of Cyber-Physical Systems Grand Prix</a></b> <b><i>(December 2021)</i></b> <br />
            <i>Carnegie Mellon University</i> <br />
          </p>
          <p>
            <a href='http://selfgraduate.ku.edu/about-self-fellowship' target="_blank" rel="noreferrer"><b>The Madison and Lila Self Graduate Fellowship</b></a> <b><i>(Declined)</i></b> <br />
            <i>University of Kansas</i> <br />
          </p>
          <p>
            <b>NSF REU Supplement to OAC-1808553 <i>(2020)</i></b> <br />
            <i>University of Kansas</i> <br />
          </p>
          <p>
            <b>NSF REU Supplement to CCF-1717894 <i>(Fall 2018 - Fall 2019)</i></b> <br />
            <i>University of Kansas</i> <br />
          </p>
          <p>
            <b>Girl Scout Gold Award <i>(Completed Jan. 2015)</i></b> <br />
          </p>
        </header>
      </div>
    );
  }
  
  export default Resume;
  