import React from 'react';
import {
  StyledTitle,
  StyledText,
  StyledWrap,
} from './Phonebook/Phonebook.styled';
import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import { Filter } from './Phonebook/Filter';

const Phonebook = () => {
  return (
    <StyledWrap>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />
      <StyledTitle>Contacts</StyledTitle>
      <StyledText>Find contacts by name</StyledText>
      <Filter />
      <ContactList />
    </StyledWrap>
  );
};

export const App = () => {
  return (
    <div>
      <Phonebook />
    </div>
  );
};
