import { DD, DLStyled, DT } from 'components/atomic/atm.definition-list.component';
import {
  Body,
  BodySecondary,
  Caption,
  H1,
  H2,
  H3,
  H4,
  H5,
  InputCaptionError,
  InputLabel,
  InputValue,
  Label,
} from 'components/atomic/atm.typography.styled';
import React from 'react';

export default {
  title: 'Typography',
  component: H1,
};

export const TypographyDemo = () => {
  return (
    <>
      <H1>Page Title</H1>
      <Body>Page brief description body as a body text</Body>
      <H2>Section Inside the page</H2>
      <H3>First Topic of attention</H3>
      <Body>Another description about whats going on</Body>
      <BodySecondary>Secondary comment about the fact</BodySecondary>
      <Label>Concept</Label>
      <H4>Start Briefing</H4>
      <DLStyled inline={false}>
        <DT>List of concepts:</DT>
        <DD>Definition Data 1</DD>
        <DD>Definition Data 2</DD>
        <DD>Definition Data 3</DD>
        <DD>Definition Data 4</DD>
      </DLStyled>
      <H5>Specific title</H5>
      <InputLabel>Tell me something</InputLabel>
      <InputValue>The thing you told me</InputValue>
      <InputCaptionError>Why its wrong</InputCaptionError>
    </>
  );
};

export const Headers = () => {
  return (
    <>
      <H1>Header H1</H1>
      <H2>Header H2</H2>
      <H3>Header H3</H3>
      <H4>Header H4</H4>
      <H5>Header H5</H5>
    </>
  );
};

export const BodyText = () => {
  return (
    <>
      <Body>Body text</Body>
      <BodySecondary>Body secondary text</BodySecondary>
      <Caption>Caption text description</Caption>
      <Label>Label</Label>
    </>
  );
};

export const InputTexts = () => {
  return (
    <>
      <InputLabel>Input label text</InputLabel>
      <InputValue>Input value text</InputValue>
      <InputCaptionError>Input caption error</InputCaptionError>
    </>
  );
};

export const DefinitionList = () => {
  return (
    <>
      <DLStyled inline={false}>
        <DT>Definition Topic not in line:</DT>
        <DD>Definition Data 1</DD>
        <DD>Definition Data 2</DD>
        <DD>Definition Data 3</DD>
        <DD>Definition Data 4</DD>
      </DLStyled>
      <DLStyled inline={true}>
        <DT inline={true}>Definition Topic in line:</DT>
        <DD inline={true}>Definition Data 1</DD>
      </DLStyled>
    </>
  );
};
