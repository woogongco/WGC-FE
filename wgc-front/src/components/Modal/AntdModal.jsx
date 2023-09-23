import { Modal } from 'antd';
import React from 'react';

const AntdModal = async ({ isModalOpen, setIsModalOpen, okCallback, contents }) => {
	return (
		<Modal
			title="Basic Modal"
			open={isModalOpen}
			onOk={() => okCallback}
			onCancel={() => setIsModalOpen(false)}
		>
			{contents}
		</Modal>
	);
};

export default AntdModal;
