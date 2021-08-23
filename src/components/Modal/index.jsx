import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import Flag from 'react-world-flags';

export default function UserModal({ isModalOpen, closeModal, modalInfo }) {
  return (
    <Modal
      isOpen={isModalOpen}
      style={{
        content: {
          top: '10%', left: '30%', right: '30%', bottom: '28%',
        },
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <img className="rounded-full" src={modalInfo.picture.large} alt="User" />
        <p className="mt-4 text-2xl font-semibold flex-row flex textcente">
          {modalInfo.name.first}
          {' '}
          {modalInfo.name.last}
        </p>
        <p className="text-purple-500">
          {' '}
          {modalInfo.email}
          {' '}
        </p>
      </div>
      <div className="py-6 px-12 text-lg">
        <p className="text-xl font-bold text-purple-600"> Informações Básicas: </p>
        <p>
          {' '}
          {modalInfo.gender === 'male' ? 'Masculino' : 'Feminino'}
          {' '}
        </p>
        <p>
          {' '}
          {moment(modalInfo.dob.date).format('DD/MM/YYYY')}
          {' '}
        </p>
        <p>
          {' '}
          {modalInfo.phone}
          {' '}
        </p>
        <p className="flex flex-row items-center">
          {modalInfo.nat}
          <Flag code={modalInfo.nat} className="w-6 h-6 ml-2" />
        </p>
        <p>
          {' '}
          {modalInfo.location.street.name}
          ,
          {' '}
          {modalInfo.location.street.number}
          ,
          {' '}
          {modalInfo.location.city}
          ,
          {' '}
          {modalInfo.location.country}
        </p>
        <p>
          {' '}
          ZIP Code:
          {' '}
          {modalInfo.location.postcode}
          {' '}
        </p>
        <p>
          {' '}
          id:
          {' '}
          {modalInfo.login.uuid}
          {' '}
        </p>
      </div>
      <div className="justify-center border-t py-2">
        <button
          className="bg-purple-600
          p-2
          mt-3
          border rounded
          text-white hover:bg-white hover:border-purple-600 hover:text-purple-600 transition-all"
          type="button"
          onClick={closeModal}
        >
          Fechar
        </button>
      </div>
    </Modal>
  );
}
