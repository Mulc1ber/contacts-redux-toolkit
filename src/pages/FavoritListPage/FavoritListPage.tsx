import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard, Loader } from "src/components";
import { useAppSelector } from "src/hooks";

export const FavoritListPage = memo(() => {
  const { contacts, favorites, loading } = useAppSelector(
    (state) => state.contacts
  );

  const favoriteContacts = contacts.filter((contact) =>
    favorites.includes(contact.id)
  );

  return (
    <Row xxl={4} className="g-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          {favoriteContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
});
