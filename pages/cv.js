import { createComponent } from "react-fela";
import { createComponentWithProxy } from "react-fela";
import { Wrap } from "../components/wrap";
import { Spacer } from "../components/spacer";
import { Link } from "../components/link";
import { Flex } from "../components/flex";
import { Title } from "../components/title";
import { List } from "../components/list";
import { ListItem } from "../components/list-item";
import { Paragraph } from "../components/paragraph";
import { Card } from "../components/card";
import { Github, Linkedin, Twitter, Email } from "../components/social-icons";
import { BackToBase } from "../components/back-to-base";
import {
  Job,
  JobTitle,
  JobMeta,
  JobCompany,
  JobDuration,
  JobLocation,
  JobDescription,
  SocialLink
} from "../components/cv";

const CV = () => (
  <Wrap>
    <BackToBase />

    <Flex as="header">
      <Title>CV - Daniel Stocks</Title>
      <Spacer size={6} />
      <Title variant="kiwi">
        Hi, I'm Daniel, from Sweden. I'm currently working as a technical leader
        at <Link href="https://www.volvocars.com/">Volvo Cars</Link>, scaling
        Digital Design, UX & UI engineering with Design Systems.
      </Title>
      <Spacer size={6} />
      <Card extend={{ width: "100%", marginLeft: "-16px" }}>
        <SocialLink href="mailto:daniel@webcloud.se">
          <Email />
          <Spacer size={2} />
          <span>daniel@webcloud.se</span>
        </SocialLink>
        <Spacer size={2} />
        <SocialLink href="https://github.com/danielstocks">
          <Github />
          <Spacer size={2} />
          <span>github.com/danielstocks</span>
        </SocialLink>
        <Spacer size={2} />
        <SocialLink href="https://twitter.com/roflwtfbbq">
          <Twitter />
          <Spacer size={2} />
          <span>twitter.com/roflwtfbbq</span>
        </SocialLink>
        <Spacer size={2} />
        <SocialLink href="https://www.linkedin.com/in/daniel-stocks">
          <Linkedin />
          <Spacer size={2} />
          <span>linkedin.com/in/daniel-stocks</span>
        </SocialLink>
      </Card>
      <Spacer size={6} />
      <Paragraph>
        I have 10 years plus of working experience with building digital
        products at startups, advertising agencies, and large-scale enterprises.
        I'm specialised in UI Engineering (eg. JavaScript/React/Web
        Platform/Native Android and iOS).
      </Paragraph>
      <Spacer size={3} />
      <Paragraph>
        With a backround as CTO and Staff Software Engineeer, I've organized
        multiple teams of software engineers in both small and large scale
        projects. I have a proven track record of building web and mobile
        products from scratch to scale.
      </Paragraph>
    </Flex>

    <Spacer size={8} />

    <Flex as="main">
      <Title variant="pear">Job Experience</Title>
      <Spacer size={8} />
      <Job>
        <JobTitle>Staff Software Engineer</JobTitle>
        <JobCompany>Volvo Cars</JobCompany>
        <JobMeta>
          <JobDuration>January 2019 - Present</JobDuration>
          <JobLocation>Stockholm, Sweden</JobLocation>
        </JobMeta>
        <JobDescription>
          <Paragraph>
            Providing company-wide technical leadership and guidance within the
            UI engineering discipline, enabling Volvo Cars to transform into an
            industry leader in the digital product space.
          </Paragraph>
          <List>
            <ListItem>
              Initiating, scaling and future-proofing our UI codebase, strategy
              and architecture.
            </ListItem>
            <ListItem>
              Delivering tools and infrastructure to empower UI engineers across
              the company.
            </ListItem>
            <ListItem>
              Promoting a positive and inclusive UI engineering culture,
              breaking down silos and enable for cross team collaboration and
              communication.
            </ListItem>
            <ListItem>
              Working in close collaboration with product owners and engineering
              leads, to help them align with best practices and ship high
              quality digital products.
            </ListItem>
            <ListItem>
              Bridging the gap between Software Engineering and UX/Design.
            </ListItem>
          </List>
        </JobDescription>
      </Job>

      <Job>
        <JobTitle>CTO</JobTitle>
        <JobCompany>Carvanro</JobCompany>
        <JobMeta>
          <JobDuration>Feburary 2016 - March 2018</JobDuration>
          <JobLocation>London, UK and Tehran, Iran</JobLocation>
        </JobMeta>
        <JobDescription>
          <Paragraph>
            Building a peer to peer ride-sharing platform to enable more
            efficient transportation for commuters in densely populated
            metropolitan areas in Iran.
          </Paragraph>
          <List>
            <ListItem>
              Overall responsible for technical architecture, recruitment,
              operations, and day-to-day management of the inhouse development
              team
            </ListItem>
            <ListItem>
              As part of the founding team, we raised over $1.5m in venture
              capital.
            </ListItem>
            <ListItem>
              Setting up continuous integration and zero downtime deployment
              pipeline.
            </ListItem>
            <ListItem>
              Selection of technologies used: Node.js, React, React Native,
              Python, Flask, ElasticSearch, PostgresSQL, Redis, AWS, K8s, Docker
              and RabbitMQ.
            </ListItem>
          </List>
        </JobDescription>
      </Job>

      <Job>
        <JobTitle>Solutions Architect</JobTitle>
        <JobCompany>Evil Enterprise</JobCompany>
        <JobMeta>
          <JobDuration>
            September 2013 - December 2015, March 2018 - December 2018
          </JobDuration>
          <JobLocation>All over the place</JobLocation>
        </JobMeta>
        <JobDescription>
          <Paragraph>
            Running my own consultancy agency. Helping clients solve problems
            that required a deep domain knowledge of web technologies and UI
            software engineering.
          </Paragraph>
          <List>
            <ListItem>
              Helping clients such as Volvo, Husqvarna, Digitas LBi with various
              projects
            </ListItem>
            <ListItem>
              Lecturing a course in JavaScript and Front-End Development at
              "Yrkeshögskoleutbildning vid Göteborgs Stad Utbildning".
            </ListItem>
            <ListItem>
              Worked extensively on several Open Source JavaScript libraries and
              React Components (available on GitHub)
            </ListItem>
          </List>
        </JobDescription>
      </Job>

      <Job>
        <JobTitle>Lead Front-End Developer</JobTitle>
        <JobCompany>Saltside</JobCompany>
        <JobMeta>
          <JobDuration>August 2011 - September 2013</JobDuration>
          <JobLocation>Gothenburg, Sweden</JobLocation>
        </JobMeta>
        <JobDescription>
          <Paragraph>
            Saltside builds online marketplaces (classifieds) in emerging
            markets. As one of the first hires I was responsible for the overall
            quality and performance of the product interface. The company grew
            to become the highest ranked classified site in three countries,
            employing over 500 people.
          </Paragraph>
          <List>
            <ListItem>
              Building web applications with JavaScript and Ruby. Frameworks
              including Ruby on Rails, Sinatra, Node.js, Backbone.js.
            </ListItem>
            <ListItem>
              Built and launched an adaptive low-bandwidth mobile site optimized
              for internet access in developing countries.
            </ListItem>
          </List>
        </JobDescription>
      </Job>

      <Job>
        <JobTitle>Front-End Developer</JobTitle>
        <JobCompany>Aino</JobCompany>
        <JobMeta>
          <JobDuration>June 2009 - August 2011</JobDuration>
          <JobLocation>Gothenburg, Sweden</JobLocation>
        </JobMeta>
        <JobDescription>
          <Paragraph>
            Aino is a leading web agency collaborating with some of the biggest
            adveritisng agencies to deliver high quality digital expierences to
            various clients.
          </Paragraph>
          <List>
            <ListItem>
              Building web sites and applications using Python, Django,
              PostgreSQL, JavaScript, HTML and CSS.
            </ListItem>
            <ListItem>
              Built a responsive website for Nudie Jeans including the Nudie
              Jeans fitguide with Backbone.js (replacing their legacy flash app)
            </ListItem>
            <ListItem>
              Developed the main website for SSRS (Swedish Sea Rescue Society)
              including an interactive weather forecast web app.
            </ListItem>
            <ListItem>
              Built website for the Gothenburg Opera House (opera.se), along
              with a custom CMS backend
            </ListItem>
          </List>
        </JobDescription>
      </Job>

      <Job>
        <JobTitle>Front-End Developer Intern</JobTitle>
        <JobCompany>NetRelations</JobCompany>
        <JobMeta>
          <JobDuration>April 2008 - August 2008</JobDuration>
          <JobLocation>Gothenburg, Sweden</JobLocation>
        </JobMeta>
        <JobDescription>
          <Paragraph>
            As an intern at NetRelations I learned about the importance of
            accessibility, performance and building ressiliant front-end
            applications.
          </Paragraph>
          <List>
            <ListItem>
              Primarily tasked with building websites in HTML/CSS and JavaScript
            </ListItem>
            <ListItem>
              NetRelations is primarily a .NET shop running most of their client
              work on SharePoint and EPIServer which gave me valuable insights
              into the Microsoft application stack.
            </ListItem>
          </List>
        </JobDescription>
      </Job>
    </Flex>

    <Spacer size={6} />
    <Title variant="pear">Other Experience</Title>
    <Spacer size={6} />

    <Job>
      <JobTitle>Founder And Coordinator</JobTitle>
      <JobCompany>Taket</JobCompany>
      <JobMeta>
        <JobDuration>April 2008 - August 2008</JobDuration>
        <JobLocation>Gothenburg, Sweden</JobLocation>
      </JobMeta>
      <JobDescription>
        <Paragraph>
          Co-founded a co-working place in the heart of Gothenburg for artists,
          freelancers and other creative individuals. We frequently organized
          exhibitions, meetups, workshops etc. At it's peak we were housing ~30
          individuals renting work space on an annual basis.
        </Paragraph>
      </JobDescription>
    </Job>

    <Spacer size={6} />
    <Title variant="pear">Education</Title>
    <Spacer size={6} />

    <Job>
      <JobTitle>Webbutvecklare</JobTitle>
      <JobCompany>Yrgo</JobCompany>
      <JobMeta>
        <JobDuration>2007 – 2009</JobDuration>
        <JobLocation>Gothenburg, Sweden</JobLocation>
      </JobMeta>
      <JobDescription>
        <Paragraph>Yrkeshögskoleutbildning, 400 YH-poäng.</Paragraph>
        <Paragraph>
          A two year vocational course focused on Full-Stack Web Development.
          Design/UX, HTML, CSS, JavaScript, PHP, SQL, C#, .NET
        </Paragraph>
      </JobDescription>
    </Job>
    <Spacer size={6} />
  </Wrap>
);

export default CV;