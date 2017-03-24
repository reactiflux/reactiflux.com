import React from 'react';
import renderer from 'react-test-renderer';
import { matcher, serializer } from 'jest-styled-components'
import {
  ReadMore,
  Copyright,
  Credits,
  PublishDate,
  Transcript,
  Logo,
} from '../misc';

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

test('<ReadMore />', () => {
  const tree = renderer.create(<ReadMore />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Copyright />', () => {
  const tree = renderer.create(<Copyright />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Credits />', () => {
  const tree = renderer.create(<Credits />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<PublishDate />', () => {
  const tree = renderer.create(<PublishDate />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Transcript />', () => {
  const props = {
    article: {
      date: 'date',
      body: 'body',
    },
  };
  const tree = renderer.create(<Transcript {...props} />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test('<Logo />', () => {
  const tree = renderer.create(<Logo />).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});
