// 制作実績（Projects）のデータ定義 - 伊澤 響 (Izawa Kyo) ポートフォリオ

export const projectsData = [
  {
    id: "project-1",
    title: "課題・提出物管理アプリ (TaskFlow)",
    subtitle: "学校生活の「課題管理が大変」という問題を解決するツール",
    category: "task",
    categoryLabel: "Task Management / Web App",
    badge: "作品①",
    accentColor: "#38bdf8",

    // 作品概要
    overview: "さいたまIT・WEB専門学校における課題や提出物の数が多く、管理の煩雑さや締切の抜け漏れを防ぐために開発した一元管理アプリケーション。",

    // 課題背景
    problems: [
      "課題や提出物が多く、紙や手帳だけでは管理が煩雑になっていた",
      "締切の把握が難しく、提出物の抜け漏れが起きやすい状態だった",
      "自分の学習ペースを整え、計画的に課題を進めたかった"
    ],

    // 解決策
    solution: "「課題・提出物を直感的に一元管理できるWebアプリ」を開発。締切までの視認性を高め、計画的な課題消化をサポート。",

    // 主な機能
    features: [
      "課題の登録・編集・削除機能",
      "締切カレンダー表示UI",
      "提出状況ステータス管理（未着手 / 進行中 / 完了）",
      "科目ごとのフィルタリング機能",
      "リマインダー通知機能（任意設定）"
    ],

    // 使用技術
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      backend: ["Node.js", "Express"],
      database: ["MySQL"],
      tools: ["GitHub", "VSCode"]
    },

    // 工夫した点
    keyPoints: [
      "学生が日常的に迷わず使えるシンプルで洗練されたUI構成",
      "課題・科目・提出ステータスを効率的に関連付けた正規化済みDB設計",
      "締切までの残り日数を視覚的に把握しやすいカレンダービューUI",
      "実際の学校生活で直面した課題をそのまま仕様に落とし込んだリアルな設計"
    ],

    // 課題と改善
    improvements: [
      "スマートフォン利用時のレスポンシブUIおよび操作感のさらなる強化",
      "通知機能をクラウド（Web Push Notification）に拡張",
      "科目ごとの進捗率や学習傾向をグラフ化する分析機能の追加予定"
    ],

    githubUrl: "https://github.com/izawakyo/izawakyo.github.io/tree/main/apps/task-app",
    liveUrl: "./apps/task-app/index.html"
  },
  {
    id: "project-2",
    title: "ポートフォリオ・スキル管理アプリ (SkillLog)",
    subtitle: "学んだ技術・制作物・資格・成長ログを一元管理するアプリ",
    category: "skill",
    categoryLabel: "Skill & Portfolio Management / Web App",
    badge: "作品②",
    accentColor: "#818cf8",

    // 作品概要
    overview: "さいたまIT・WEB専門学校での日々の学習成果、習熟度スキルレベル、制作物、資格を一元管理し、就職活動時の自己PRや成長分析に役立てるアプリケーション。",

    // 課題背景
    problems: [
      "専門学校で勉強していると「自分は何ができるようになったんだろう？」と成長を実感しづらい",
      "どの技術を使って過去の作品を作ったかを忘れやすく管理が煩雑になる",
      "就職活動の際にアピールできる技術や経験を素早く整理・提出しにくい"
    ],

    // 解決策
    solution: "「自分が学んだ技術・スキルレベル・制作物・資格・GitHub URLを一元管理し、自己PR文を自動生成するアプリ」を開発。",

    // 主な機能
    features: [
      "技術登録 ＆ 習熟度スキルレベル評価（★1〜★5）",
      "制作物・GitHub URL・使用技術の登録管理",
      "取得資格・合格ログ管理（基本情報、ITパスポート等）",
      "学習記録 ＆ 成長ログ表示",
      "就活・面接用 自己PRプロフィールのワンタップ自動生成機能"
    ],

    // 使用技術
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      backend: ["Node.js", "Express"],
      database: ["MySQL"],
      tools: ["GitHub", "VSCode"]
    },

    // 工夫した点
    keyPoints: [
      "「このアプリ自体が自分の就活に役立つ」という強い当事者意識とストーリー性",
      "Python ★★★★☆ / FastAPI ★★★☆☆ のように習熟度が直感的に伝わるレベルメーターUI",
      "学んだ技術と過去の制作物リポジトリを簡単に紐付けられるデータベース設計",
      "入力データから面接やESでそのまま使える技術サマリー文章の自動生成機能"
    ],

    // 課題と改善
    improvements: [
      "月別の学習時間を可視化する成長グラフ表示（Chart.js連携予定）",
      "ポートフォリオPDF/Webページのワンタップエクスポート機能",
      "GitHub API連携による自動コミット数取得・スキル更新機能の追加予定"
    ],

    githubUrl: "https://github.com/izawakyo/izawakyo.github.io/tree/main/apps/skill-log",
    liveUrl: "./apps/skill-log/index.html"
  }
];

// 2作品に共通する価値
export const commonValues = [
  {
    title: "① 自分の生活・就活課題から発想している",
    desc: "TaskFlow（学校の課題を管理）× SkillLog（学んだ技術・作品を管理）という、自身の学校生活と就活動線に直結した2つの作品で構成されています。"
  },
  {
    title: "② 2つの作品に強い関連性がある",
    desc: "日々の講義・課題消化から、身についたスキルの記録・作品整理まで、学生生活のサイクルをトータルで支える相互補完的なシステム構成です。"
  },
  {
    title: "③ 技術の幅と実務的な設計",
    desc: "フロント（HTML/CSS/JS）、バックエンド（Node.js/Express）、DB（MySQL）まで、Webアプリ開発の一連の流れを確実に押さえています。"
  },
  {
    title: "④ 明確な問題解決ストーリー",
    desc: "「当事者としての悩み → IT技術で構造的に解決 → 就活や学習での実践的活用」という説得力の高いストーリーを提示しています。"
  }
];
