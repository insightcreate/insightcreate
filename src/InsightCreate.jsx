import appLogo from './assets/logo.svg'
import logodark from './assets/logodark.svg'
import whatsapp from './assets/whatsapp.svg'
import arrow_right from './assets/arrow_right.svg'
import insightcreate from './assets/insightcreate.svg'
import insight from './assets/insight.svg'
import create from './assets/create.svg'
import email from './assets/email.svg'
import call from './assets/call.svg'
import copy from './assets/copy.svg'
import NavBar from './components/NavBar';
import Header from './components/Header';
import join from './assets/join.svg'
import JoinCreatorTeam from './components/JoinCreatorTeam';
import Technologies from './components/Technologies';
import SalesCard from './components/SalesCard';
import Footer from './components/Footer'

import Instagram from'./assets/social/instagram.svg'
import WhatsApp from'./assets/social/whatsapp.svg'
import Facebook from'./assets/social/facebook.svg'
import Linkedin from'./assets/social/linkedin.svg'
import X from'./assets/social/x.svg'
import GitHub from'./assets/social/github.svg'
import Medium from'./assets/social/medium.svg'
import Dev from'./assets/social/dev.svg'

import Django from "./assets/tech/Django.svg";
import CodeIgniter from "./assets/tech/CodeIgniter.svg";
import NET from "./assets/tech/NET.svg";
import Yii from "./assets/tech/Yii Framework.svg";
import Vite from "./assets/tech/Vite.js.svg";
import Laravel from "./assets/tech/Laravel.svg";
import Kotlin from "./assets/tech/Kotlin.svg";
import Flutter from "./assets/tech/Flutter.svg";
import TypeScript from "./assets/tech/typescript.svg";
import Express from "./assets/tech/express.svg";
import Figma from "./assets/tech/figma.svg";
import Java from "./assets/tech/java.svg";
import JavaScript from "./assets/tech/javascript.svg";
import Python from "./assets/tech/python.svg";
import ReactJS from "./assets/tech/react.svg";
import SpringBoot from "./assets/tech/springboot.svg";
import Tailwind from "./assets/tech/tailwind.svg";
import Thymeleaf from "./assets/tech/thymeleaf.svg";
import Services from './components/Services';

import sweb from './assets/services/web.svg';
import smobile from './assets/services/smobile.svg';
import serpcrm from './assets/services/serpcrm.svg';
import suiux from './assets/services/suiux.svg';
import TagLine from './components/TagLine';

import headerimage from './assets/headerimg.svg';
import { motion } from "framer-motion";

function InsightCreate() {
    const socialIcons = { Instagram, WhatsApp, Facebook, Linkedin, X, Medium, Dev, GitHub };
    const techIcons = {
        Django,
        CodeIgniter,
        NET,
        Yii,
        Vite,
        Laravel,
        Kotlin,
        Flutter,
        TypeScript,
        Express,
        Figma,
        Java,
        JavaScript,
        Python,
        ReactJS,
        SpringBoot,
        Tailwind,
        Thymeleaf,
      };

      
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  return (
    <>
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Header arrow_right={arrow_right} headerimage={headerimage} />
    </motion.div>

    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <TagLine />
    </motion.div>

    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Services arrow_right={arrow_right} sweb={sweb} smobile={smobile} serpcrm={serpcrm} suiux={suiux} />
    </motion.div>

    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Technologies techIcons={techIcons} />
    </motion.div>

    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <SalesCard whatsapp={whatsapp} email={email} call={call} arrow_right={arrow_right} />
    </motion.div>

    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <JoinCreatorTeam join={join} />
    </motion.div>

    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Footer logodark={logodark} logo={appLogo} socialIcons={socialIcons} whatsapp={whatsapp} email={email} call={call} arrow_right={arrow_right} insightcreate={insightcreate} insight={insight} create={create} copy={copy} />
    </motion.div>
    </>
  )
}

export default InsightCreate
