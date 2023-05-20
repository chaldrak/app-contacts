import { Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import axios from "../../services/instance-axios";
import ContactForm from "../../components/contact-form";

const ListingContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [contactIsSaved, setContactIsSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/contact/get/all");
        const data = response.data.data;
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [contactIsSaved]);

  return (
    <main className="w-full p-10">
      <Table dataSource={contacts} className="border">
        <Column title="Nom et prénoms" dataIndex="fullname" key="fullname" />
        <Column title="Adresse email" dataIndex="email" key="email" />
        <Column title="Numéro de téléphone" dataIndex="contact" key="contact" />
        <Column
          title="Action"
          key="action"
          render={() => (
            <Space size="middle">
              <a>Modifier</a>
              <a>Supprimer</a>
            </Space>
          )}
        />
      </Table>
      <div className="mt-4 flex items-center justify-center border py-4">
        <ContactForm setContactIsSaved={setContactIsSaved} />
      </div>
    </main>
  );
};

export default ListingContacts;
