export interface SenarioItem {
  senarioId: string,
  description: string,
  S3Path: string,
  picture: string,
}
export function IsSenarioItem(item: any): item is SenarioItem {
  return typeof item.senarioId === "string"
    && (item.description == null || typeof item.description === "string")
    && (item.S3Path == null || typeof item.S3Path === "string")
    && (item.picture == null || typeof item.picture === "string")
}

// サンプル挿入用データ
// 本当はCDKで作成時にダミーとして挿入したい
const sample: SenarioItem[] = [{
  senarioId: "1",
  S3Path: "testString",
  description: "sample1",
  picture: "xxxxxiMage",
}, {
  senarioId: "2",
  S3Path: "testString2345",
  description: "sample1233",
  picture: "xxxxxiMage000",
}
]