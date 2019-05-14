import React from "react"
import recentStyles from "./recent.module.css"

const placeholder = ["SBJ.26440667", "SBJ.26440667", "SBJ.26440667"];

const Recent = () => (
    <div className={recentStyles.recent}>
      <h3 className='sub-header'>Recent galaxies</h3>
      <span className='descriptor'>
        Check out some of the galaxies that have been classified both on
        U!Scientist at the Adler Planetarium and online on
        <a className="peach-link" href="https://www.galaxyzoo.org">Galaxy Zoo.</a>
      </span>
      <div className={recentStyles.subjects}>
        {placeholder.map((image, i) =>
            <div key={i} className={recentStyles.subject}>
              <div />
              <a href="https://www.zooniverse.org">{image}</a>
            </div>
        )}
      </div>
      <button className='hollow-button'>
        <a href='https://www.galaxyzoo.org'>more recent galaxies</a>
      </button>
    </div>
);

export default Recent;
