import React from 'react';
import renderer from 'react-test-renderer';
import { matcher, serializer } from 'jest-styled-components'
import {
  NavigationLink,
  LinkList,
  Buttons,
  Button,
  IconLink,
  Toggle,
  StyledLink,
  SocialLinks,
  Arrow,
} from '../links';

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

test('<NavigationLink />', () => {
  const tree = renderer.create(<NavigationLink />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<LinkList />', () => {
  const tree = renderer.create(<LinkList />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Buttons />', () => {
  const tree = renderer.create(<Buttons />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Button />', () => {
  const tree = renderer.create(<Button />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Button primary />', () => {
  const props = {
    primary: true,
  }
  const tree = renderer.create(<Button {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<IconLink />', () => {
  const props = {
    to: 'to',
    title: 'title',
    src: 'src',
    alt: 'alt',
    target: 'target',
  }
  const tree = renderer.create(<IconLink {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Toggle />', () => {
  const props = {
    onClick: jest.fn(),
  }
  const tree = renderer.create(<Toggle {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});


test('<Toggle active />', () => {
  const props = {
    onClick: jest.fn(),
    active: true,
  }
  const tree = renderer.create(<Toggle {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<SocialLinks />', () => {
  const tree = renderer.create(<SocialLinks />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Arrow />', () => {
  const tree = renderer.create(<Arrow />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});
