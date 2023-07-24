import carnet from 'assets/carnet/home.png';
import pico1 from 'assets/pico/1.png';
import eatout1 from 'assets/eatout/1.png';
import eatout2 from 'assets/eatout/2.png';
import eternumGif from 'assets/eternum/home.gif';
import aospresse from 'assets/aospresse/1.png';
import bousta1 from 'assets/bousta/1.jpg';
import bousta2 from 'assets/bousta/2.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';

const disciplines = ['Web dev.', 'Mobile dev.', 'UI & UX design'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      {
        rootMargin: '-100% 0px 0px 0px',
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Agency"
        description="TwoDev is a premier agency specializing in development and design services, dedicated to bringing your ideas to life with precision and creativity. We are passionate about crafting unique and innovative solutions tailored to your specific needs. From website development to UI/UX design, our team of skilled professionals combines technical expertise with artistic flair to deliver stunning and functional results. "
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />{' '}
      <ProjectSummary
        id="project-4"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={1}
        title="Pico Editor"
        description="Introducing our creative web application that empowers users to design stunning posters effortlessly. Whether you're planning an event, promoting a product, or simply unleashing your artistic flair, our user-friendly platform provides all the tools you need to create eye-catching posters that make a lasting impression."
        buttonText="View project"
        buttonLink="https://pico-editor.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [pico1],
              placeholder: pico1,
            },
          ],
        }}
      />{' '}
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={2}
        title="Carnet"
        description={`
    Introducing an innovative web application
    for car enthusiasts and sellers alike - a platform designed
    for hosting car auctions and receiving bids.This user - friendly web app simplifies the process of selling and buying cars, providing a seamless experience
    for all users.
    `}
        buttonText="View project"
        buttonLink="https://carnet-beta.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Carnet',
          textures: [
            {
              srcSet: [carnet],
              placeholder: carnet,
            },
          ],
        }}
      />{' '}
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={3}
        title="Eternum"
        description={`
        Multilanguage DApp for versionning and virtuel contract between organisations
    `}
        buttonText="View project"
        buttonLink="https://eternum.vercel.app"
        model={{
          type: 'laptop',
          alt: 'Carnet',
          textures: [
            {
              srcSet: [eternumGif],
              placeholder: eternumGif,
            },
          ],
        }}
      />{' '}
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={4}
        title="Aospresse"
        description="Management system for a press agency"
        buttonText="View project"
        buttonLink="https://aospresse-admin.ma"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [aospresse, aospresse],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={5}
        title="Bousta"
        description="A mobile app for cooking enthusiasts to share their recipes and discover new ones"
        buttonText="View website"
        buttonLink="https://play.google.com/store/apps/details?id=com.bousta.naimdev"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [bousta1, bousta1],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [bousta2, bousta2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      {/* <ProjectSummary
              id="project-3"
              sectionRef={projectThree}
              visible={visibleSections.includes(projectThree.current)}
              index={3}
              title="Aospresse"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              buttonText="View project"
              buttonLink="/projects/slice"
              model={{
                type: 'laptop',
                alt: 'Annotating a biomedical image in the Slice app',
                textures: [
                  {
                    srcSet: [aospresse1],
                    placeholder: aospresse1,
                  },
                ],
              }}
            /> */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="about-us"
      />
      <Footer />
    </div>
  );
};
