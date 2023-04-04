import { Button, Space, Table, Tag } from 'antd';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { songlist } from '../../api/song';

export default function Test() {
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      title: '歌曲名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '歌手',
      dataIndex: 'singer',
      key: 'singer',
    },
    {
      title: '上传时间',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  useEffect(async () => {
    const data = await songlist();
    const newData = data.map((item) => {
      return { ...item, id: nanoid() };
    });
    setTableData(newData);
  }, []);

  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={tableData}
        rowKey={(record) => record.id}
      />
    </Fragment>
  );
}
