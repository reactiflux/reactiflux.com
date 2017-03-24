import React from 'react';
import renderer from 'react-test-renderer';
import { matcher, serializer } from 'jest-styled-components'
import {
  Header,
  Navigation,
  SideBarInner,
  FrontPage,
  Title,
  Subtitle,
  Footer,
  Container,
  MarkdownContainer,
  SideBar,
  TitleBox,
  SmallTitle,
  Text,
} from '../structure';

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

test('<Header />', () => {
  const tree = renderer.create(<Header />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Navigation />', () => {
  const tree = renderer.create(<Navigation />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<SideBarInner />', () => {
  const tree = renderer.create(<SideBarInner />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<FrontPage />', () => {
  const tree = renderer.create(<FrontPage />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Title />', () => {
  const tree = renderer.create(<Title />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Subtitle />', () => {
  const tree = renderer.create(<Subtitle />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Footer />', () => {
  const tree = renderer.create(<Footer />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Container />', () => {
  const tree = renderer.create(<Container />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<MarkdownContainer />', () => {
  const tree = renderer.create(<MarkdownContainer />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<MarkdownContainer transcript />', () => {
  const props = {
    transcript: true,
  };
  const tree = renderer.create(<MarkdownContainer {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<SideBar />', () => {
  const props = {
    toggle: jest.fn(),
  };
  const tree = renderer.create(<SideBar {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<SideBar active />', () => {
  const props = {
    active: true,
    toggle: jest.fn(),
  };
  const tree = renderer.create(<SideBar {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});


test('<SideBar active isToc />', () => {
  const props = {
    active: true,
    toggle: jest.fn(),
    isToc: true,
    toc: 'toc',
  };
  const tree = renderer.create(<SideBar {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<TitleBox />', () => {
  const tree = renderer.create(<TitleBox />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<SmallTitle />', () => {
  const tree = renderer.create(<SmallTitle />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});


test('<Text />', () => {
  const tree = renderer.create(<Text />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});
