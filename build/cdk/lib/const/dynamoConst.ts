import * as dynamodb from '@aws-cdk/aws-dynamodb';

type MyTableProps = Required<Pick<dynamodb.TableProps, 'tableName' | 'partitionKey'>>;

export const senarioInfoProps:MyTableProps = {
  tableName: 'SenarioInfo',
  partitionKey: { name: 'senarioId', type: dynamodb.AttributeType.STRING },
};
