import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import faSteam from '@fortawesome/fontawesome-free-brands/faSteam';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/works">Works</Link></h2>
          <p>A selection of few that I&apos;m not too ashamed of</p>
          
        </div>
      </header>
      <p>The work shown will mostly consist features developed for the Taleworlds' in-house engine whilst my time there, I lost most of the images from older works but they should at least paint a picture about me.</p>
      {/* <p>Work is ordered from most recent to oldest. </p> */}
      <p>You can contact me about my rather boring works which do not involve these kind of fancy visuals for me to put here. </p>
      
      {/* <p>Keep in mind that Taleworlds Engine is a small team and every member is also tasked with maintenance of the Mount & Blade Series. </p> */}
      
      <h3>Tiled Culling</h3>
      <p>Uses <a href="https://dl.acm.org/doi/10.1145/2407746.2407764">2.5D</a> bitmasks technique, and <a href="https://wickedengine.net/2018/01/10/optimizing-tile-based-light-culling/">coarse AABB</a> tests for decals and environment maps  </p>
      
      <img style={{height: 320}} src={`${BASE_PATH}/images/projects/point_light.gif`} alt="" />
      <img style={{height: 320}} src={`${BASE_PATH}/images/projects/decal.jpg`} alt="" />
      <br /><br />
      <h3>Decal System Overhaul</h3>
      
      <p>
      - Switched to tiled decal rendering, generates a variable sized atlas for all decals in game. <br />
      - Used to render forward with meshes, detached and implemented seperate component type and a sub-renderer system for it to be able to optimize buffer fills every frame. <br />
      - Implemented an artist-friendly system which abstracts the atlas generation process from them, allowing to dynamically generate a new atlas in the background whilst they make changes.
      </p>
      <img src={`${BASE_PATH}/images/projects/hardlight.jpg`} alt="" />
      <p>Tiled culling also enabled more flexibility with decal rendering, above is hardlight blending for blood decals.</p>
      
      <img style={{height: 350}} src={`${BASE_PATH}/images/projects/moss1.jpg`} alt="" />
      <img style={{height: 350}} src={`${BASE_PATH}/images/projects/moss3.jpg`} alt="" />
      <img style={{height: 382}} src={`${BASE_PATH}/images/projects/moss2.jpg`} alt="" />
      <p>A pre-gbuffer variant of decals that can blend into parallax meshes. We procedurally placed these on frequently used materials to break the tiling. Above is a scene that makes heavy use of this technique to add moss details on stone crevices.</p>

      <h3>Dynamic Resolution Scaling</h3>
      
      <img-comparison-slider class="slider-example-focus" >
        <img style={{height: 520}} slot="before" src={`${BASE_PATH}/images/projects/cas_on.jpg`} />
        <img style={{height: 520}} slot="after" src={`${BASE_PATH}/images/projects/cas_off.jpg`} />
        <img slot="handle" class="custom-handle" src={`${BASE_PATH}/images/projects/chevron-handle.svg`} />
      </img-comparison-slider>

      <p>Changes render resolution every frame to accommodate performance requirements in GPU intensive scenes<a href="https://software.intel.com/content/www/us/en/develop/articles/dynamic-resolution-rendering-article.html">*</a>. Implemented <a href="https://gpuopen.com/fidelityfx-cas/">AMD FidelityFX's Contrast Adaptive Sharpening</a> to handle both the upscaling and sharpening in a single pass in order to restore the details lost after the process.<br />
      </p>

      <h3>Replay Editor and Offline Renderer</h3>
      <p>I was also responsible for the Cinematic Replay Editor and the Offline Renderer, lots of refactoring and parallelization tricks along with visual improvements. Below is the Early Access Release Trailer demonstrating it's results.</p>
      <iframe width="840" height="472" src="https://www.youtube-nocookie.com/embed/yCk6Jk7DvrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br /><br />


      <h3>Damage System</h3>
      <p>Developed for an unannounced project which involved vehicles with user created arbitrary geometries. Same technique with the <a href="https://robertsspaceindustries.com/comm-link/transmission/14568-Design-The-New-Damage-System">Star Citizen Damage Model</a>, but with a few added challenges due to on the fly created geometry of vehicles in our game. <br />
      </p>

      <img style={{height: 380}} src={`${BASE_PATH}/images/projects/damage2.jpg`} alt="" />
      <img style={{height: 380}} src={`${BASE_PATH}/images/projects/damage1.jpg`} alt="" />
      <br /><br />
      <h3>Other</h3>
      <p>Most of these are ports of other implementations that I added when I was meddling with post-fx graph system.</p>
      <img style={{height: 400}} src={`${BASE_PATH}/images/projects/streaks.jpg`} alt="" />
      <p>Lens streak post effect à la J.J. Abrams.</p>

      <img style={{height: 426}} src={`${BASE_PATH}/images/projects/kurasawa.jpg`} alt="" />
      <p>Oil painting effect (port of kuwahara filter).</p>

      <p style={{position: 'absolute', right: 90}}>Triplanar prototyping shader.</p><br />
      <img style={{height: 325}} src={`${BASE_PATH}/images/projects/lens_flare.jpg`} alt="" />

      <img style={{height: 325}} src={`${BASE_PATH}/images/projects/triplanar.jpg`} alt="" />
      <p> Lens flare.</p>

      <h3>Publications</h3>

      <p> These are works that I have done during my time at HUCG Research Team. All software implementations in following works except management, content preperation and ML benchmarkings belong to me.</p>
      
      <a style={{borderBottomStyle: 'none', borderBottomWidth: 0}} href = 'https://graphics.cs.hacettepe.edu.tr/NOVA/index.html' target="_blank" rel="noopener noreferrer">
        <img style={{height: 160}} src={`${BASE_PATH}/images/projects/computer_vision.jpg`} alt="" />
      </a>
      <p>
        <a href = 'https://graphics.cs.hacettepe.edu.tr/NOVA/index.html' target="_blank" rel="noopener noreferrer">Rendering Virtual Worlds with Humans for Computer Vision Tasks</a>
      </p>
      
      <a style={{borderBottomStyle: 'none', borderBottomWidth: 0}} href = 'https://hucvl.github.io/synthetic18k/' target="_blank" rel="noopener noreferrer">
        <img style={{height: 160}} src={`${BASE_PATH}/images/projects/synthetic_18k_tod_weather_fade.jpg`} alt="" />
      </a>
      <p>
        <a href = 'https://hucvl.github.io/synthetic18k/' target="_blank" rel="noopener noreferrer"> Synthetic18K: Learning Better Representations for Person Re-ID and Attribute Recognition from 1.4 Million Synthetic Images </a>
      </p>
      
      <a style={{borderBottomStyle: 'none', borderBottomWidth: 0}} href = 'https://dl.acm.org/citation.cfm?id=3279960' target="_blank" rel="noopener noreferrer">
        <img style={{height: 130}} src={`${BASE_PATH}/images/projects/vr_cafe.jpg`} alt="" />
      </a>
      <p>
        <a href = 'https://dl.acm.org/citation.cfm?id=3279960' target="_blank" rel="noopener noreferrer"> The Virtual Cafeteria: An Immersive Environment for Interactive Food Portion-Size Education. In Proceedings of the 3rd International Workshop on Multisensory Approaches to Human-Food Interaction </a>
      </p>

      <h3>Hobby Stuff</h3>

      <p>Some side projects I worked on which ended up seeing the light of day:</p>

      <div className="cell-container-horizontal">
        <a href='https://store.steampowered.com/app/1351950/Projectile_Dysfunction/' target="_blank" rel="noopener noreferrer">
          <article className="mini-post-horizontal">
            <div className="platform">
              <FontAwesomeIcon icon={faSteam} />
            </div>
            <a className="image">
              <img src={`${BASE_PATH}/images/projects/projectile_dysfunction_header.jpg`} />
            </a>
            <div>
              <header>
                <h3>Projectile Dysfunction on Steam</h3>
              </header>
              <div className="description">
                <p>Have you ever said to yourself "This FPS game is really good, but I wish my gun barrel</p>
                <p>would flap around like a nude skydiving man...</p>
                <p><FontAwesomeIcon icon={faLink} /> store.steampowered.com</p>
              </div>
            </div>
          </article>
        </a>
      </div>
      <p style={{marginTop: -34}}>A multiplayer first-person shooter with a twist that I single-handedly worked on and ended up self-publishing on <a href = 'https://store.steampowered.com/app/1351950/Projectile_Dysfunction/' target="_blank" rel="noopener noreferrer"> Steam</a>. Fun little project which allowed me to experience the wide range of works that goes into creating a product firsthand.</p>
      
      <div className="cell-container-horizontal">
        <a href='https://www.nexusmods.com/discoelysium/mods/11/' target="_blank" rel="noopener noreferrer">
          <article className="mini-post-horizontal">
            <a className="image">
              <img src={`${BASE_PATH}/images/projects/toggle_hud.jpg`} />
            </a>
            <div>
              <header>
                <h3>Toggle HUD</h3>
              </header>
              <div className="description">
                <p>This lets you toggle the HUD off and on in-game with caps lock.</p>
                <p><FontAwesomeIcon icon={faLink} /> nexusmods.com</p>
              </div>
            </div>
          </article>
        </a>
      </div>

      <p style={{marginTop: -34}}><a href = 'https://twitter.com/yacobg42/status/1339962209976389634?s=20'>Requested</a>  for a <a href = 'https://youtu.be/Md5PTWBuGpg'>youtube series</a> from the <a href = 'https://twitter.com/yacobg42/status/1339962209976389634?s=20'>creator</a> . Used <a href = 'https://github.com/bo3b/3Dmigoto'>3Dmigoto</a> to search for UI related shaders and override the output values.</p>
      
      {/* {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))} */}
    </article>
  </Main>
);

export default Projects;
