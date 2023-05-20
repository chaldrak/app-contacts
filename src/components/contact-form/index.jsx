import { Button, Form, Input } from "antd";
import axios from "../../services/instance-axios";
import PropTypes from "prop-types";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const ContactForm = ({ setContactIsSaved }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    createContact(values);
  };

  const createContact = async (credentials) => {
    try {
      const response = await axios.post("/api/contact/create", credentials);
      console.log(response);
      setContactIsSaved((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
        width: 600,
      }}
    >
      <Form.Item
        name="fullname"
        label="Nom & Prénoms"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Adresse Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="contact"
        label="Numéro de Téléphone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="bg-blue-600">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

ContactForm.propTypes = {
  setContactIsSaved: PropTypes.func.isRequired,
};

export default ContactForm;
