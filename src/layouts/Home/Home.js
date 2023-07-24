import carnet from 'assets/carnet/home.png';
import pico1 from 'assets/pico/1.png';
import eatout1 from 'assets/eatout/1.png';
import eatout2 from 'assets/eatout/2.png';
import eternumGif from 'assets/eternum/home.gif';
// import aospresse from 'assets/carnet/home.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';

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
        buttonLink="/projects/slice"
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
        buttonLink="/projects/smart-sparrow"
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
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={3}
        title="EatOut"
        description="Introducing the exceptional restaurant application that brings a delightful dining experience right to your fingertips. Discover, explore, and indulge in a world of culinary delights with our user-friendly and feature-rich platform."
        buttonText="View website"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [eatout1],
              placeholder: eatout1,
            },
            {
              srcSet: [eatout2, eatout2],
              placeholder: eatout2,
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
        buttonLink="/projects/smart-sparrow"
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
        index={1}
        title="Designing the future of education"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
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
        index={2}
        title="Video game progress tracking"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
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
