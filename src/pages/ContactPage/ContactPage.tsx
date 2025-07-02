import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard, Empty } from "src/components";
import { useAppSelector } from "src/hooks";

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const { contacts, loading } = useAppSelector((state) => state.contacts);

  const contact = contacts.find(({ id }) => id === contactId);

  return (
    <Row xxl={3}>
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <Col className={"mx-auto"}>
            {contact ? <ContactCard contact={contact} /> : <Empty />}
          </Col>
        </>
      )}
    </Row>
  );
};
