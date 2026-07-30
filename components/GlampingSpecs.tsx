'use client';

import styled from '@emotion/styled';
import Reveal from './Reveal';

const SPECS = [
  {
    label: '定員人数',
    lines: ['最大4名', '＊3歳以下(添い寝サービスとして無料/各食事やアメニティ類のご用意なし)'],
  },
  {
    label: '駐車台数',
    lines: ['1台', '※駐車場から荷物は手運びしていただきます。（カート貸し出し有り）'],
  },
  {
    label: 'グランピングエリア設備',
    lines: [
      'グランピングドーム約19.6㎡ / ダブルベッド2台 / 室内ラウンドテーブル＋室内チェア2脚 / 小型冷蔵庫 / ケトル / プロジェクター&スクリーン / エアコン / 除湿機 / ハンガーラック&ハンガー4本 / 屋外用サンダル / 室内用スリッパ / 屋外テーブル＋屋外チェア4脚 / ファイヤーピット＋薪1束 / ランタン3ヶ / BBQコンロ',
    ],
  },
  {
    label: 'アメニティ\n(グランピング内)',
    lines: [
      '室内パジャマ / 九十九里オーシャンビール(料金内含む) / 水ボトル(料金内含む) / ドリップコーヒーパック(料金内含む) / 煎茶＋急須セット(料金内含む) / グラス＋カップ / 皿(14.5cm皿4枚＋23cm皿4枚) / 箸カトラリー4セット / ティッシュ / 歯ブラシ',
    ],
  },
  {
    label: 'グランピング注意点',
    lines: [
      '※デッキを乗り越えて、森側へは進入できません。',
      '※施設のものは持ち帰りはできません。',
      '※お手洗いは管理棟付近をご利用ください。手洗いシンクは、グランピングエリアの小洗い場か、管理棟付近の手洗いシンクをご利用ください。',
      '※スピーカーやプロジェクターによる大音量のご利用や大声でのご利用はご遠慮ください。',
      '※プロジェクターのご利用の際のアプリ連携は、利用者様のアカウントをご利用ください。また、ご利用後は、ログアウトお願いいたします。施設側では、プロジェクター内臓有料アプリのアカウントのご提供はございません。',
      '※破損や汚れ等の発生の場合は必ず施設側へご連絡ください。',
      '※焚き火は必ずファイヤーピットの上でお願いいたします。花火はできません。',
      '※素泊まりプランの場合は、貸切露天風呂等が含まれておりませんので、タオル等のアメニティは含まれません。お求めの場合は、管理棟ショップより、お求めください。',
    ],
  },
];

export default function GlampingSpecs() {
  return (
    <SpecsSection>
      <Reveal delay={0} duration={1.2} distance={30}>
        <SpecsTable>
          {SPECS.map((spec) => (
            <SpecRow key={spec.label}>
              <SpecLabel>
                {spec.label.split('\n').map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </SpecLabel>
              <SpecContent>
                {spec.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </SpecContent>
            </SpecRow>
          ))}
        </SpecsTable>
      </Reveal>
    </SpecsSection>
  );
}

const SpecsSection = styled.section`
  width: 100%;
  background: #3a4430;
  padding: 8px 20px 64px;

  @media screen and (min-width: 768px) {
    padding: 8px 40px 96px;
  }
`;

const SpecsTable = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 24px 0;
  border-top: 1px dashed rgba(255, 255, 255, 0.25);

  &:first-of-type {
    border-top: none;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 220px 1fr;
    gap: 24px;
    padding: 32px 0;
  }
`;

const SpecLabel = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Hiragino Mincho ProN', 'Noto Serif JP', serif;
  font-size: 15px;
  letter-spacing: 0.04em;
  color: #fff;

  @media screen and (min-width: 768px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 16px;
  }
`;

const SpecContent = styled.div`
  font-family: 'Hiragino Mincho ProN', 'Noto Serif JP', serif;
  font-size: 13px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.85);

  p {
    margin: 0;
  }

  p + p {
    margin-top: 4px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
