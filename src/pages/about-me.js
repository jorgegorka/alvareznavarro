import React from 'react'
import Helmet from 'react-helmet'

import SiteNavigation from '../components/site-navigation'
import MobileNavigation from '../components/mobile-navigation'

const AboutMe = () => (
  <div>
    <header className="site-header outer no-cover">
      <Helmet>
        <title>Jorge Alvarez | Online business developer & SaaS barista</title>
        <meta name="description" content="I am the founder of Happy Mood Score a feedback and employee engagement tool with an proactive and unique approach that makes give feedback an easy task." />
        <body className="page-template" />
      </Helmet>
      <div className="inner">
        <MobileNavigation />
        <SiteNavigation />
      </div>
    </header>
    <main id="site-main" className="site-main outer" role="main">
      <div className="inner">
        <article className="post-full post page no-image">
          <header className="post-full-header">
            <h1 className="post-full-title">About me</h1>
          </header>
          <section className="post-full-content">
            <p>
              My name is Jorge Alvarez. I am 46 years old and I've been working in web projects for the last 18 years.
              <br />
              Since 2005 I've been focused on SaaS applications: developing, managing, measuring and optimising.
            </p>
            <p>
              In 2004 I founded Oficina Inmobiliaria and in 2005 I launched the first SaaS application for the real estate market in Spain.
              <br />
              In 2008 the real estate bubble burst and the following crisis hit me hard so I had to close the company in 2011.
            </p>
            <p>
              I've been working for companies in the UK, Germany, Denmark and Spain most of the time remotely.
            </p>
            <p>
              I'm the founder of <a href="https://www.happymoodscore.com" title="employee feedback and engagement">Happy Mood Score</a> a SaaS application that companies can use to get feedback and increase employee engagement.
              <br />
              It has a proactive approach to get feedback from employees and a peer-to-peer recognition tool.
              <br />
              Happy Mood Score is also a metric that helps Human Resources departments or team managers to detect how engaged and happy are their employees. The application uses feedback, gamification, analytics and big data to increase employee engagement and talent retention.
            </p>
            <p>
              It's the perfect tool if your want to <a href="https://www.happymoodscore.com" title="employee feedback and engagement">improve the feedback you get from your employees</a> or your company has remote workers, digital nomads or distributed teams.
            </p>
            <p>
              I graduated on the first promotion of the Web Analytics Master directed by Gemma Muñoz and organized by KSchool.
            </p>
            <p>
              I live in <a href="https://binged.it/2MVNzSD" target="_blank">Logroño (La Rioja - Spain)</a> with Mayte, Ariadna and Mario. We also have a cat named Pili.
            </p>
          </section>
        </article>
      </div>
    </main>
  </div>
)

export default AboutMe
