import React from 'react';

import { Container, Flex, Avatar, Row, PeopleIcon, Column, CompanyIcon, LocationIcon, EmailIcon, BlogIcon, TwitterIcon } from './styles';

interface Props {
  username: string;
  name: string;
  bio?: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
  twitter_username?: string;
}

const ProfileData: React.FC<Props> = ({
  username,
  name,
  bio,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
  twitter_username,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
          <p>
            {bio}
          </p>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>

      <Column>
        {/* Verifica se tem dados */}
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span><a href={`${blog}`} target={`_blank`}>{blog}</a></span>
          </li>
        )}
        {twitter_username && (
          <li>
            <TwitterIcon />
            <span><a href={`https://twitter.com/${twitter_username}`} target={`_blank`}>{twitter_username}</a></span>
          </li>
        )}
      </Column>
    </Container >
  );
}

export default ProfileData;