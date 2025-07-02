import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components";

import { useAppSelector } from "src/hooks";

export const GroupListPage = memo(() => {
  const { groups, loading } = useAppSelector((state) => state.contacts);

  return (
    <Row xxl={4}>
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          {groups.map((groupContacts) => (
            <Col key={groupContacts.id}>
              <GroupContactsCard groupContacts={groupContacts} withLink />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
});
