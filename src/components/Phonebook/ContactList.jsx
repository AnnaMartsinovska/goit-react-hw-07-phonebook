import React from 'react';
import { deleteContact, getContacts } from 'components/redux/sliceContacts';
import { StyledList, StyledEl } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'components/redux/sliceFilter';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const inlineStyle = { marginLeft: '15px', cursor: 'pointer' };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts?.length) {
    return (
      <StyledList>
        {filteredContacts.map(contact => (
          <StyledEl key={contact.id}>
            {contact.name}:{contact.number}
            <button
              onClick={() => handleDelete(contact.id)}
              style={inlineStyle}
            >
              Delete
            </button>
          </StyledEl>
        ))}
      </StyledList>
    );
  }
};
