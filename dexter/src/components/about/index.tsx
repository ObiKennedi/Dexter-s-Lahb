import Avatar from "../../assets/avatar.png"
import Contact from "../../assets/contact.png"
import Copy from "../../assets/copy.png"
import Copied from "../../assets/copied.png"
import SkillStack from "../../assets/skill-stack.png"
import KeyBoard from "../../assets/vision-key.png"

import { useState } from "react"
import Globe from 'react-globe.gl';

import "./index.scss"

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('obikennedy05@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section id="about">
            <div>
                <div>
                    <img src={Avatar} alt="avatar" />
                    <div>
                        <h4>Welcome:</h4>
                        <div>
                            <p>Dexter's Lahb - where caffeine meets code and pixels fear our precision.</p>
                            <p>We build clean, clever websites and apps—with code, caffeine, and a bit of chaos. Whether you need a sleek launch or a rescue mission for your cousin's broken site, we've got you.</p>
                            <p>We're a small crew of tech nerds who build websites and apps that actually work (crazy concept, right?). Whether you're launching the next big thing or just want your cousin's janky WordPress site to stop crashing, we've got you.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Contact} alt="contact" />
                    <div onClick={handleCopy}>
                        <img src={hasCopied ? `${Copied}` : `${Copy}`} alt="" />
                        <div>dexterslahb@dl.com</div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <Globe
                            height={200}
                            width={200}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[
                                {
                                    lat: 5.4833,
                                    lng: 7.0333,
                                    text: 'Owerri, Nigeria',
                                    color: 'white',
                                    size: 15
                                }
                            ]}
                        />
                        <div>
                            <h4>Location</h4>
                            <div>
                                <p>You don't have to worry about time zones, locations and communication</p>
                                <p>We're mostly based in Owerri, Imo state Nigeria, but fret not for location poses no threat to our collaboration, we take remote jobs from all over the world (even if you are in North Korea).</p>
                            </div>
                        </div>
                        <a href="#contact">
                            <button>Contact me</button>
                        </a>
                    </div>
                    <div>
                        <img src={SkillStack} alt="tech-stack" />
                        <div>
                            <h4>Tech stack</h4>
                            <div>In Dexter's Lahb, We cook up apps using a wild mix of languages, frameworks, and tools — like a mad scientist with a keyboard. From React potions to Next.js experiments, everything's built to be fast, scalable, and just a little dangerously efficient.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={KeyBoard} alt="keyboard" />
                    <div>
                        <h4>Why we code?</h4>
                        <div>To be honest, there's no grand vision behind this endeavor. We're just a team of curious nerds, dancing on the border between chaos and value — building things we believe in, breaking what needs breaking, and crafting experiences that somehow make the digital world feel a little more human. We experiment, we iterate, and occasionally, we ship magic.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About