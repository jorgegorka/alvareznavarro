import React from 'react'
import Helmet from 'react-helmet'

import SiteNavigation from '../components/site-navigation'
import MobileNavigation from '../components/mobile-navigation'

const OpenSource = () => (
  <div>
    <header className="site-header outer no-cover">
      <Helmet>
        <title>Jorge Alvarez | Web developer & SaaS barista</title>
        <meta
          name="description"
          content="Open Source projects created by Jorge Alvarez"
        />
        <body className="page-template"/>
      </Helmet>
      <div className="inner">
        <MobileNavigation/>
        <SiteNavigation/>
      </div>
    </header>
    <main id="site-main" className="site-main outer" role="main">
      <div className="inner">
        <article className="post-full post page no-image">
          <header className="post-full-header">
            <h1 className="post-full-title">My Open Source projects</h1>
          </header>
          <section className="post-full-content">
            <h2>
              <a href="https://github.com/jorgegorka/demanda" title="Demanda E-commerce open source">
                Demanda E-commerce
              </a>
            </h2>
            <p>
              Demanda is an e-commerce Ruby on Rails & Graphql powered backend. It also includes an admin
              frontend that you can use as a reference when you create your own e-commerce site. It uses
              JWT for authentication.
            </p>
            <p>
              Demanda includes an admin example site made with Svelte JS and Apollo client. It uses
              TailwindCss for layout and styling.
            </p>
          </section>
          <section className="post-full-content">
            <h2>
              <a href="https://github.com/jorgegorka/siete-valles" title="Open source Gamification and event tracking">
                Gamification
              </a>
            </h2>
            <p>
              The goal of this engine is to give an easy way to integrate user engagement schemas and event tracking
              into your existent applications.
            </p>
            <p>You can create specific schemas like an onboarding process and keep track of the progress of each individual employee. Or you can implement generic long term schemas and event tracking like tracking the activity of users on a website (articles, comments, likes, etc.).</p>
          </section>
          <section className="post-full-content">
            <h2>
              <a href="https://github.com/jorgegorka/svelte-firebase" title="Demanda E-commerce open source">
                Svelte - Firebase
              </a>
            </h2>
            <p>
              A template that you can use to create applications using Svelte and Firebase.
            </p>
            <div>
              <h3>Features</h3>
              <ul>
                <li>Powerfull routing system with nested layouts.</li>
                <li>Public and Private sections.</li>
                <li>Form validation.</li>
                <li>Preconfigured pages for Home, Login, Signup and more...</li>
                <li>Secure your database with Firebase rules.</li>
                <li>Fully responsive theme.</li>
              </ul>
            </div>
          </section>
          <section className="post-full-content">
            <h2>
              <a href="https://github.com/jorgegorka/svelte-router" title="Demanda E-commerce open source">
                Svelte Router SPA
              </a>
            </h2>
            <p>
              Svelte Router adds routing to your Svelte apps. It keeps your routes organized in a single place.
              With Svelte Router SPA you have all the features you need to create modern web applications with minimal configuration.
            </p>
            <h3>Features</h3>
            <ul>
              <li>Define your routes in a single interface.</li>
              <li>Layouts global, per page or nested.</li>
              <li>Nested routes.</li>
              <li>Named params.</li>
              <li>Localisation.</li>
              <li>Guards to protect urls. Public and private urls.</li>
              <li>Route prefix.</li>
              <li>Track pageviews in Google Analytics (optional).</li>
              <li>Use standard <code>&lt;a href="/about-us"&gt;About&lt;/a&gt;</code> elements to navigate between pages (or use <code>&lt;Navigate /&gt;"</code> for bonus features).</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  </div>
)

export default OpenSource
