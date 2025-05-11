
import Avatar from '../Components/Avatar';
import Card from '../Components/Card';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { useState } from 'react';
const Profile = () => {
    const [formData, setFormData] = useState({
        name: 'Arun Saini',
        email: 'arun@example.com',
        imageUrl: 'https://i.pravatar.cc/150?img=3',
      });

      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

      const handleSave = () => {
        alert(`Profile saved!\nName: ${formData.name}\nEmail: ${formData.email}`);
      };
    
  return (
    <div className=" bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <Card title="User Profile">
          <Avatar name={formData.name} imageUrl={formData.imageUrl} size="lg" className="mb-4" />

          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4"
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4"
          />

          <Input
            label="Profile Picture URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mb-4"
          />

          <Button variant="primary" onClick={handleSave}>
            Save Profile
          </Button>
        </Card>
      </div>
    </div>
    
  )
}

export default Profile
