import type * as dynamodb from '@aws-cdk/aws-dynamodb';

type MyTableProps = Required<Pick<dynamodb.TableProps, 'tableName' | 'partitionKey'>>;

export const senarioInfoProps:MyTableProps = {
  tableName: 'SenarioInfo',
  partitionKey: { name: 'senarioId', type: 'S' as dynamodb.AttributeType },
};

export const sequenceProps:MyTableProps = {
  tableName: 'sequences',
  partitionKey: { name: 'tableName', type: 'S' as dynamodb.AttributeType },
};
