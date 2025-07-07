import { memo, useLayoutEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  ContactCard,
  FilterForm,
  FilterFormValues,
  Loader,
} from "src/components";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppSelector } from "src/hooks";

export const ContactListPage = memo(() => {
  const { contacts, groups, loading } = useAppSelector(
    (state) => state.contacts
  );
  const [filteredContacts, setFilteredContacts] =
    useState<ContactDto[]>(contacts);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = [...contacts];

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({ name }) =>
        name.toLowerCase().includes(fvName)
      );
    }

    if (fv.groupId) {
      const groupContacts = groups.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        );
      }
    }

    setFilteredContacts(findContacts);
  };

  useLayoutEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Row xxl={4} className="g-4">
              {filteredContacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Col>
    </Row>
  );
});
