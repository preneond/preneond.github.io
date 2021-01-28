import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SectionEducation from '../components/section-education';
import SectionPresentations from '../components/section-presentations'
import SectionCertificates from '../components/section-certificates'
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const noBlog = !posts || !posts.length;
  const presentations = get(data, 'site.siteMetadata.presentations', false);
  const certificates = get(data, 'site.siteMetadata.certificates', false);

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {!noBlog && <SectionBlog posts={posts} />}
      {experience && experience.length && <SectionExperience experience={experience} />}
      {education && education.length && <SectionEducation education={education} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {presentations && presentations.length && <SectionPresentations presentations={presentations} />}
      {certificates && certificates.length && <SectionCertificates certificates={certificates} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        linkedin
        github
        projects {
          name
          description
          link
        }
        experience {
          name
          position
          description
          period
          link
          subitems {
            name
            description
          }
        }
        education {
          name
          description
        }
        skills {
          name
          description
        }
        certificates {
          name
          description
        }
        presentations {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
