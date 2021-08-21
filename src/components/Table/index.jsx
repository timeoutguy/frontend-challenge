import React, { useState } from 'react';
import moment from 'moment';
import { IoMdFemale, IoMdMale } from 'react-icons/io';

export default function Table({ data }) {
  return (
    <table className="table-fixed mt-6 font-lg">
      <thead>
        <tr className="bg-purple-400">
          <th className="p-2 w-3/12 border border-gray-600">Name</th>
          <th className="p-2 w-2/12 border border-gray-600">Gender</th>
          <th className="p-2 w-3/12 border border-gray-600">Birth</th>
          <th className="p-2 w-3/12 border border-gray-600"> Actions </th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr className="text-center">
            <td className="p-2 border border-gray-600">
              {user.name.first}
              {' '}
              {user.name.last}
            </td>
            <td className="p-2 border border-gray-600">
              {user.gender === 'male' ? (
                <div className="flex flex-row items-center">
                  Masculino
                  <IoMdMale />
                </div>
              ) : (
                <div className="flex flex-row items-center">
                  Feminino
                  <IoMdFemale />
                </div>
              )}
            </td>
            <td className="p-2 border border-gray-600">{moment(user.dob.date).format('DD/MM/YYYY')}</td>
            <td className="p-2 border border-gray-600 text-purple-500 font-bold"> Visualizar mais </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
