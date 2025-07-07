import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "src/layout";
import { ContactListPage, FavoritListPage, NotFound } from "src/pages";
import { ContactRouter } from "../ContactRouter/ContactRouter";
import { GroupRouter } from "../GroupRouter/GroupRouter";
import { useAppDispatch } from "src/hooks";
import { fetchContacts, fetchFavorites, fetchGroups } from "src/redux/thunks";

export const AppRouter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchGroups());
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ContactListPage />} />
        <Route path="/contact/*" element={<ContactRouter />} />
        <Route path="/groups/*" element={<GroupRouter />} />
        <Route path="/favorit" element={<FavoritListPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
