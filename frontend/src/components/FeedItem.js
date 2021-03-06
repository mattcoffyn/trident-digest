import { Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';
import SanityPortableText from './SanityPortableText';
import { dateToLocaleString } from '../utils/formatDates';

const FeedItemStyles = styled.article`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;
  padding: 0 1rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  .main-image {
    width: 100%;
    max-width: 500px;
  }
  .placeholder {
    width: 100%;
    max-width: 500px;
    height: 100%;
    min-height: 250px;
  }
  .post-details {
    display: flex;
    flex-direction: column;
    section {
      flex-grow: 2;
      a {
        color: red;
        &:visited {
          color: red;
        }
      }
    }
  }
  .article-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    h2 {
      margin: 0;
      font-size: 3rem;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 3rem;
      color: var(--white);
    }
    p {
      margin: 0;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
  }
  .article-footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .post-categories {
    color: var(--red);
    text-transform: uppercase;
    font-weight: 800;
    font-size: 2rem;
    text-align: right;
    line-height: 2rem;
    p {
      display: inline;
    }
    span {
      color: var(--white);
    }
  }
  .authors {
    color: var(--red);
    font-weight: 600;
    font-size: 1.7rem;
    text-align: right;
    margin-top: 1rem;
    p {
      display: inline;
    }
    span {
      color: var(--white);
    }
  }
`;

const FeedItem = ({ post }) => {
  return (
    <FeedItemStyles>
      {post.mainImage ? (
        <Link to={`/posts/${post.slug.current}`}>
          <SanityImage
            {...post.mainImage}
            width={500}
            alt={post.mainImage.alt}
            className="main-image"
          />
        </Link>
      ) : (
        <div className="placeholder"></div>
      )}
      <div className="post-details">
        <div className="article-header">
          <Link to={`/posts/${post.slug.current}`}>
            <h2>{post?.title}</h2>
          </Link>
          <p>{dateToLocaleString(post.publishedAt)}</p>
        </div>
        <section>
          {post._rawExcerpt && <SanityPortableText blocks={post._rawExcerpt} />}
        </section>
        <div className="article-footer">
          <div className="post-categories">
            {post.categories.map((category, index) => {
              if (index + 1 < post.categories.length) {
                return (
                  <p key={category?.id}>
                    {category?.title}
                    <span>&ensp;/&ensp;</span>
                  </p>
                );
              } else {
                return <p key={category?.id}>{category?.title}</p>;
              }
            })}
          </div>
          <div className="authors">
            {post.authors.length ? (
              post.authors.map((author, index) => {
                if (index + 1 < post.authors.length) {
                  return (
                    <p key={author.author.id}>
                      {author.author?.name}
                      <span>&ensp;/&ensp;</span>
                    </p>
                  );
                } else {
                  return <p key={index}>{author.author.name}</p>;
                }
              })
            ) : (
              <p>Anonymous</p>
            )}
          </div>
        </div>
      </div>
    </FeedItemStyles>
  );
};

export default FeedItem;
