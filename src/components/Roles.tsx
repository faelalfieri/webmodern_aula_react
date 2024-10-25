import React, { useEffect, useState } from 'react';
import {
    getRoles,
    createRole,
    updateRole,
    deleteRole,
    getRoleById,
} from '../services/rolesService';

const Roles: React.FC = () => {
    const [roles, setRoles] = useState<any[]>([]);
    const [newRole, setNewRole] = useState('');
    const [editingRoleId, setEditingRoleId] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoles = async () => {
            const data = await getRoles();
            setRoles(data);
        };
        fetchRoles();
    }, []);

    const handleAddRole = async () => {
        const role = { name: newRole };
        const createdRole = await createRole(role);
        setRoles([...roles, createdRole]);
        setNewRole('');
    };

    const handleEditRole = async () => {
        if (editingRoleId) {
            const role = { name: newRole };
            const updatedRole = await updateRole(editingRoleId, role);
            setRoles(roles.map(r => (r.id === editingRoleId ? updatedRole : r)));
            setNewRole('');
            setEditingRoleId(null);
        }
    };

    const handleDeleteRole = async (id: string) => {
        await deleteRole(id);
        setRoles(roles.filter(role => role.id !== id));
    };

    return (
        <div>
            <h1>Roles</h1>
            <input
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Role name"
            />
            <button onClick={editingRoleId ? handleEditRole : handleAddRole}>
                {editingRoleId ? 'Edit Role' : 'Add Role'}
            </button>

            <ul>
                {roles.map(role => (
                    <li key={role.id}>
                        {role.name}
                        <button onClick={() => {
                            setEditingRoleId(role.id);
                            setNewRole(role.name);
                        }}>Edit</button>
                        <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Roles;