import profileKatakana from 'assets/profile.jpg';
import profileImgLarge from 'assets/profile.jpg';
import profileImgPlaceholder from 'assets/profile.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="xs" as="p">
      At TwoDev, we are a dynamic duo of passionate developers on a mission to bring
      innovation and excellence to the digital world.
    </Text>
    <Text className={styles.description} data-visible={visible} size="xs" as="p">
      Who We Are ? We are a collaborative team of two highly skilled developers who thrive
      on turning ideas into reality. Our combined expertise spans a wide range of
      technologies and programming languages, empowering us to tackle diverse projects
      with confidence and efficiency.
    </Text>
    <Text className={styles.description} data-visible={visible} size="xs" as="p">
      Our Approach at TwoDev, we believe in the power of collaboration and open
      communication. From the initial brainstorming session to the final implementation,
      we involve our clients in every step of the development process. By understanding
      their goals and requirements, we can tailor our solutions to perfectly match their
      needs.
    </Text>

    <Text className={styles.description} data-visible={visible} size="xs" as="p">
      Why Choose Us ?
      {
        "When you choose TwoDev, you're not just hiring developers; you're partnering with a team that genuinely cares about your project's success. We prioritize building strong relationships with our clients, and we believe in providing ongoing support even after the project's completion."
      }
    </Text>
    <Text className={styles.description} data-visible={visible} size="xs" as="p">
      Join us on this journey of turning ideas into reality. Whether you are a startup
      looking to make a mark or an established company seeking to revolutionize your
      digital presence, we are ready to collaborate and make it happen.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Us
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
