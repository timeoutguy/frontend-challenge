/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import moment from 'moment';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import UserModal from '../Modal';
import Pagination from '../Pagination';

export default function Table({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = (user) => {
    setIsModalOpen(true);
    setModalInfo(user);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const indexOfLast = currentPage * 10;
  const indexOfFirst = indexOfLast - 10;
  const currentData = data.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {isModalOpen && (
      <UserModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalInfo={modalInfo}
      />
      )}
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
          {currentData.map((user) => (
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
              <td className="p-2 border border-gray-600" onClick={() => openModal(user)}>
                {' '}
                <p className="text-purple-500 font-bold cursor-pointer"> Visualizar mais </p>
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination paginate={paginate} />
    </>
  );
}
