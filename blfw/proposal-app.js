/* global document, window, localStorage */
(function () {
  'use strict';

  const STORAGE_LOCALE = 'proposal-locale';
  const STORAGE_VIEW = 'proposal-view';
  const TOTAL_SLIDES = 11;

  /** @type {Record<string, string>} */
  let VI = {};

  const JA = {
    'ui.lang': '言語',
    'ui.langVi': 'Tiếng Việt',
    'ui.langJa': '日本語',
    'ui.view': '表示',
    'ui.viewVertical': '縦スクロール',
    'ui.viewHorizontal': 'スライド',
    'ui.prevAria': '前のスライド',
    'ui.nextAria': '次のスライド',
    'ui.toolbarAria': 'スライド表示のコントロール',
    'ui.slideLabel': '{n} / {t}',

    's01.eyebrow': 'ベースラインフレームワーク',
    's01.h1': '工数・品質・開発プロセスの有効性を評価する新たなフレームワーク提案',
    's01.lead':
      '新フレームワークは評価の一連を標準化します。チケット分類、工数収集、ベースライン構築、基準からの乖離の比較、および改善のためのRCA。',
    's01.c1.h3': '中核となる変更枠組み',
    's01.c1.li0': 'Complexity + Risk / Uncertainty によるチケット分類',
    's01.c1.li1': 'エンドツーエンドワークフローに基づく工数の測定',
    's01.c1.li2': 'CxRy 別ベースラインの構築とローリングトレンドの追跡',
    's01.c1.li3': 'ベースラインとの比較による warning / abnormal の検知',
    's01.c1.li4': 'プロセスとパフォーマンス改善のための RCA の実施',
    's01.c2.h3': '変更の範囲',
    's01.c2.li0': 'Data: 工数収集方法の変更',
    's01.c2.li1': 'Evaluation: チケット分類方法の変更',
    's01.c2.li2': 'Baseline: 参照水準の構築方法の変更',
    's01.c2.li3': 'Comparison: normal / warning / abnormal の判定方法の変更',
    's01.c2.li4': 'Action: 評価後のレビューと改善の進め方の変更',

    's02.eyebrow': '現行ベースライン',
    's02.h2': '現行のベースライン構築メカニズム',
    's02.c1.h3': 'ベースラインの構築方法',
    's02.c1.li0': 'Cursor IDE 導入前の履歴データ',
    's02.c1.li1': '収集期間: 2025年8月〜2026年12月。',
    's02.c1.li2': 'ワーク項目は主に Feature と Bug の2グループ',
    's02.c1.li3': '各 S グループごとに P50 所要時間（Coding+FixBug）と P50 Bug Count を算出',
    's02.c2.h3': '旧チケット評価モデル',
    's02.th0': '要因',
    's02.th1': '重み',
    's02.th2': 'スケール',
    's02.r0c0': 'Complexity',
    's02.r1c0': 'Risk / Uncertainty',
    's02.r2c0': 'Effort / Volume',
    's02.note': 'チケットスコア = (C × 40%) + (R × 35%) + (E × 25%)',
    's02.st1.n': 'ステップ 1',
    's02.st1.t': '開発者による CRE 自己評価',
    's02.st1.p': '各開発者が3要因に沿ってチケットを自己評価します。',
    's02.st2.n': 'ステップ 2',
    's02.st2.t': '工数比率による集約',
    's02.st2.p': 'チケットスコアは各人の貢献比率に基づいて集約されます。',
    's02.st3.n': 'ステップ 3',
    's02.st3.t': '固定スコアレンジへのマッピング',
    's02.st3.p': '合計スコアは 0–20, 20–40, 40–60, 60–80, 80–100 の帯で S1–S5 に振り分けられます。',
    's02.st4.n': 'ステップ 4',
    's02.st4.t': 'S グループごとのベースライン算出',
    's02.st4.p': '各グループの Spent Time と Bug Count の P50 を取得します。',

    's03.eyebrow': 'ペインポイント',
    's03.h2': '旧ベースラインが効果評価の根拠になりにくい5点',
    's03.i1.h': '主観性',
    's03.i1.p':
      'CRE は開発者個人の評価に依存し、工数%で集約すると難易度の高い部分を正しく反映しない場合があります。',
    's03.i2.h': '検証不足',
    's03.i2.p': 'CRE の重みは実難易度を表すかどうか、まだ十分に検証されていません。',
    's03.i3.h': '硬直的なグルーピング',
    's03.i3.p':
      'S1–S5 が固定レンジで区切られ、チケットが少数グループに偏り、中央値の代表性が下がりがちです。',
    's03.i4.h': '指標の狭さ',
    's03.i4.p': 'Coding とバグ修正のみを見ており、チケットのエンドツーエンド工数を反映していません。',
    's03.i5.h': 'トレンド追跡なし',
    's03.i5.p': '静的ベースラインでは、継続的な改善の追跡を支援しません。',
    's03.ib1.t': 'なぜ問題か',
    's03.ib1.p':
      'ベースラインの信頼性が低いと、チケット間の工数比較は不公平になり、異常検知が難しく、プロセス・ワークフロー・Cursor IDE の影響を客観的に評価する根拠が不足します。',
    's03.ib2.t': '移行の方向性',
    's03.ib2.p':
      '動的ベースラインへ移行: Complexity + Risk で分類し、エンドツーエンド工数を測定し、Productivity / Quality / Stability / Performance の4軸で追跡します。',

    's04.eyebrow': '新モデル',
    's04.h2':
      '改善の方向性: 業務の本質に沿ったチケット分類で正しいベースラインと比較する',
    's04.c1.h3': '設計原則',
    's04.c1.li0': 'Complexity と Risk / Uncertainty でチケットを分類する。',
    's04.c1.li1': '分類の入力に effort は使わない。',
    's04.c1.li2': 'チケットは必ず同一 CxRy グループのベースラインとだけ比較する。',
    's04.c1.li3': 'ベースラインを定期更新しトレンドを追う。',
    's04.c2.h3': '2つの入力要因',
    's04.th0': '要因',
    's04.th1': '説明',
    's04.th2': 'スケール',
    's04.r0c0': 'Complexity',
    's04.r0c1': '技術・システムの複雑さ',
    's04.r1c0': 'Risk / Uncertainty',
    's04.r1c1': '不確実性や依存の度合い',
    's04.pill1': 'C + R は分類の入力、effort はベースラインと比較する出力。',
    's04.imp.p':
      'CxRy は共通基準で評価されたときに価値があります。分類の一貫性が高まり、ベースラインが信頼され、履歴データに基づく見積もりを支援します。',
    's04.imp.s': 'C1–C5 および R1–R5 それぞれに共通ガイドラインがある。',
    's04.pill2':
      'チケット分類 → CxRy 割当 → 同一グループのベースライン取得 → 実績工数と比較 → 乖離時は Review / RCA',

    's05.eyebrow': 'グルーピング',
    's05.h2': 'CxRy マトリクス: 正しいベースライン比較のための分類',
    's05.mx00': 'Complexity \\ Risk',
    's05.ib1.t': '強み',
    's05.ib1.p':
      'CxRy によるグルーピングは固定スコア分割より業務の本質を反映し、ベースラインの代表性を高めます。',
    's05.ib2.t': 'オペレーション上の意味',
    's05.ib2.p':
      'チケットは必ず同じ業務グループのベースラインとだけ比較され、工数レビューの公平性と早期の異常検知に資します。',

    's06.eyebrow': 'メトリクス',
    's06.h2': 'CxRy グループのベースライン構築・評価のための新メトリクス群',
    's06.c1.h3': 'Total effort（エンドツーエンド）',
    's06.c1.li0': 'Study / Investigation',
    's06.c1.li1': 'Coding',
    's06.c1.li2': 'Unit test',
    's06.c1.li3': 'Code review',
    's06.c1.li4': '同一チケット内のバグ修正',
    's06.c1.pill': '→ チケットの実工数をより十分に反映',
    's06.c2.h3': '各 CxRy グループのコアメトリクス',
    's06.c2.li0': '参照水準',
    's06.c2.li0a': 'P50: 代表的な工数',
    's06.c2.li0b': 'P75: 高いがまだ正常な閾値',
    's06.c2.li0c': 'P90: 警告閾値',
    's06.c2.li1': 'ベースラインの信頼度',
    's06.c2.li1a': 'Count: グループ内チケット数',
    's06.c2.li1b': 'Variance = P75 / P50: 安定性',
    's06.c2.li1c': 'Outlier rate: 中央値の1.5倍超のチケットの%',
    's06.ib1.t': 'パーセンタイル方式',
    's06.ib1.p': 'P75 と P90 は Nearest Rank により、閾値がデータ内の実値になります。',
    's06.ib2.t': '品質メトリクス',
    's06.ib2.p0': 'Bug density = Bug count / Total effort',
    's06.ib2.p1': 'Rework ratio = Rework effort / Total effort',
    's06.ib2.p2': '目標: 工数は下げつつ品質は悪化させない',

    's07.eyebrow': '判定ルール',
    's07.h2': 'ベースライン比較時のチケット分類ルール',
    's07.c1.h3': 'オペレーション上の意味',
    's07.c1.li0': 'チケットは必ず同一 CxRy グループのベースラインと比較される。',
    's07.c1.li1': 'P75 は高いがまだ正常な閾値。',
    's07.c1.li2': 'P90 は異常で原因分析が必要な閾値。',
    's07.c1.li3': 'P25 は異常に速いチケットの検知に用い、品質や工数記録を再確認する。',
    's07.c2.h3': 'Decision rule',
    's07.c2.li0': 'Actual < P25 → 異常に低い、レビューが必要。',
    's07.c2.li1': 'P25 ≤ Actual ≤ P75 → 正常',
    's07.c2.li2': 'P75 < Actual ≤ P90 → 注視',
    's07.c2.li3': 'Actual > P90 → 異常、RCA が必要',
    's07.ib1.t': 'ベースラインの優先',
    's07.ib1.p0': 'Count ≥ 10 → BL_Recently を使用',
    's07.ib1.p1': 'Count < 10 → BL_All-time を使用',
    's07.ib1.p2': 'BL_All-time = 5–9 → warning のみに使用',
    's07.ib1.p3': 'BL_All-time < 5 → 結論には使わない',
    's07.ib2.t': '注意',
    's07.ib2.p0':
      '異常に速い（< P25）は必ずしも良いことではない。品質や工数記録を確認すること。',
    's07.ib2.p1':
      '> P90 はレビューと RCA のシグナルであり、最終結論ではない。',

    's08.eyebrow': 'RCA',
    's08.h2': 'ベースラインは異常検知の道具であり RCA につながる',
    's08.c1.h3': 'いつ RCA / より深いレビューが必要か',
    's08.c1.li0': 'チケット > P90: 工数が異常',
    's08.c1.li1': 'チケット < P25: 異常に速い、品質または工数記録の確認',
    's08.c1.li2': 'グループの Outlier rate の上昇: プロセス不安定の兆候',
    's08.c2.h3': '原因カテゴリ',
    's08.c2.li0': 'CxRy: 業務グループの誤分類',
    's08.c2.li1': 'Spec: 要件が不明確または変更',
    's08.c2.li2': 'Dev: 実行上の問題',
    's08.c2.li3': 'System: 技術的負債 / システム制約',
    's08.c2.li4': 'Data: 工数記録の不正確さ',
    's08.pill':
      '標準から逸脱したチケット → Review → RCA → 原因特定 → プロセス改善',
    's08.box.p':
      'Cursor だけが改善を生む要因ではありません。評価すべきは、開発プロセス全体がより良く、安定し、品質が上がっているかです。',

    's09.eyebrow': '解釈',
    's09.h2': 'Cursor を独立した要因として評価すべきでない',
    's09.l.h3': '誤りやすい結論',
    's09.l.li0': '「X%速いのは Cursor のおかげ」',
    's09.l.li1': '「遅いのは Cursor が効いていないから」',
    's09.l.li2': 'ツール単体を測って一般化する',
    's09.r.h3': '適切な理解',
    's09.r.li0h':
      'Cursor は開発プロセスにおける<strong>支援ツール</strong>である',
    's09.r.li1': 'チケット結果は多要因の複合的な影響を受ける',
    's09.r.li2h':
      '<strong>プロセス全体の結果</strong>で評価し、単一ツールに切り離さない',
    's09.f0': '業務タイプ',
    's09.f1': '複雑さ',
    's09.f2': '要件品質',
    's09.f3': '実行スキル',
    's09.f4': 'Review / Testing',
    's09.f5': '技術的負債',
    's09.f6': 'ワークフロー変更',
    's09.rule':
      '評価すべきは Cursor 単体の効果ではなく、Cursor 導入後に開発プロセス全体がよりよく動いているかです。',

    's10.eyebrow': '評価',
    's10.h2': '改善後の結果を評価する枠組み',
    's10.t1.tag': '01 Productivity',
    's10.t1.h3': '生産性',
    's10.t1.m': '月次の工数中央値',
    's10.t1.p': 'CxRy 別に追跡し、代表的工数が時間とともに下がっているかを見る。',
    's10.t2.tag': '02 Quality',
    's10.t2.h3': '品質',
    's10.t2.m': 'Bug density & Rework ratio',
    's10.t2.p':
      'スピードアップが品質低下や手戻り工数の増加を伴わないか確認する。',
    's10.t3.tag': '03 Stability',
    's10.t3.h3': '安定性',
    's10.t3.m': 'Variance',
    's10.t3.p': '工数の安定性と予測しやすさを時間軸で評価する。',
    's10.t4.tag': '04 Performance',
    's10.t4.h3': 'パフォーマンス',
    's10.t4.m': 'P75 & P90',
    's10.t4.p':
      '期待レンジ内のチケット割合と RCA が必要なチケット割合を追跡する。',
    's10.rule':
      '「改善した」と言えるのは、生産性が上がり品質が下がらず、安定性が悪化せず、異常率が増えないときだけ。',

    's11.eyebrow': 'まとめ',
    's11.h2': '結論と組織的価値',
    's11.c1.h3': '新フレームワークが変えること',
    's11.c1.li0': '感覚的な CRE スコアから CxRy 分類へ',
    's11.c1.li1': 'Coding + バグ修正だけでなくエンドツーエンド工数を測定',
    's11.c1.li2': '正しい業務グループのベースラインとチケットを比較',
    's11.c1.li3': 'ベースラインでレビュー・警告・RCA に活用',
    's11.c2.h3': '組織レベルでの価値',
    's11.c2.li0': '業務グループごとの社内参照基準の形成',
    's11.c2.li1': '見積もりと計画を履歴データにより強く根拠づける',
    's11.c2.li2': '計画と工数レビューでの個人の感覚依存を減らす',
    's11.close':
      'Cursor を切り離して効果を測るべきではありません。<br>評価すべきは開発プロセス全体の結果です。<br>「改善した」と言えるのは、生産性が上がり、品質が下がらず、安定性が悪化せず、パフォーマンスが期待レンジ内にあるときだけです。',
  };

  const TITLE = {
    vi: 'Baseline Effort & Quality Framework',
    ja: 'ベースライン工数・品質フレームワーク',
  };

  function captureViFromDom() {
    VI = {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      VI[el.dataset.i18n] = el.textContent.trim();
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      VI[el.dataset.i18nHtml] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      const idx = spec.indexOf(':');
      if (idx === -1) return;
      const attr = spec.slice(0, idx).trim();
      const key = spec.slice(idx + 1).trim();
      if (key && VI[key] === undefined) {
        const cur = el.getAttribute(attr);
        if (cur) VI[key] = cur;
      }
    });
  }

  function applyLocale(lang) {
    const dict = lang === 'ja' ? JA : VI;
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'vi';
    document.title = lang === 'ja' ? TITLE.ja : TITLE.vi;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    const nav = document.getElementById('deck-toolbar');
    if (nav) {
      const aria = dict['ui.toolbarAria'];
      if (aria) nav.setAttribute('aria-label', aria);
    }

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      const idx = spec.indexOf(':');
      if (idx === -1) return;
      const attr = spec.slice(0, idx).trim();
      const key = spec.slice(idx + 1).trim();
      const v = dict[key];
      if (v !== undefined) el.setAttribute(attr, v);
    });

    try {
      localStorage.setItem(STORAGE_LOCALE, lang);
    } catch (_e) {}
  }

  function getSlides() {
    return Array.prototype.slice.call(document.querySelectorAll('.deck .slide'));
  }

  let slideIndex = 0;

  function updateSlideStatus(lang, index) {
    const el = document.getElementById('slide-status');
    if (!el) return;
    const labelTpl = lang === 'ja' ? JA['ui.slideLabel'] : VI['ui.slideLabel'];
    if (!labelTpl) {
      el.textContent = index + 1 + ' / ' + TOTAL_SLIDES;
      return;
    }
    el.textContent = labelTpl.replace('{n}', String(index + 1)).replace('{t}', String(TOTAL_SLIDES));
  }

  function announceSlide(lang, index) {
    const ann = document.getElementById('sr-announce');
    if (!ann) return;
    const status = (lang === 'ja' ? JA : VI)['ui.slideLabel'] || '{n} / {t}';
    ann.textContent = status.replace('{n}', String(index + 1)).replace('{t}', String(TOTAL_SLIDES));
  }

  function setHorizontalIndex(nextIndex, direction) {
    const slides = getSlides();
    if (!slides.length) return;
    slideIndex = Math.max(0, Math.min(slides.length - 1, slideIndex));
    const clamped = Math.max(0, Math.min(slides.length - 1, nextIndex));
    if (clamped === slideIndex && slides[slideIndex].classList.contains('is-active')) return;

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    slides.forEach(function (s, i) {
      s.classList.remove('is-active', 'is-enter-left', 'is-enter-right');
    });

    slideIndex = clamped;

    if (prefersReduced || direction === 0) {
      slides[slideIndex].classList.add('is-active');
    } else {
      if (direction > 0) slides[slideIndex].classList.add('is-enter-right');
      else slides[slideIndex].classList.add('is-enter-left');
      void slides[slideIndex].offsetWidth;
      slides[slideIndex].classList.add('is-active');
    }

    const lang = document.documentElement.lang === 'ja' ? 'ja' : 'vi';
    updateSlideStatus(lang, slideIndex);

    const prev = document.getElementById('btn-prev');
    const next = document.getElementById('btn-next');
    if (prev) prev.disabled = slideIndex <= 0;
    if (next) next.disabled = slideIndex >= slides.length - 1;

    announceSlide(lang, slideIndex);
  }

  function setViewMode(mode) {
    const body = document.body;
    const hGroup = document.querySelector('.deck-horizontal-only');
    const vertical = mode === 'vertical';

    body.classList.toggle('view-vertical', vertical);
    body.classList.toggle('view-horizontal', !vertical);

    if (hGroup) hGroup.hidden = vertical;

    document.getElementById('btn-view-vertical').setAttribute('aria-pressed', vertical ? 'true' : 'false');
    document.getElementById('btn-view-horizontal').setAttribute('aria-pressed', vertical ? 'false' : 'true');

    if (!vertical) {
      const lang = document.documentElement.lang === 'ja' ? 'ja' : 'vi';
      setHorizontalIndex(slideIndex, 0);
      updateSlideStatus(lang, slideIndex);
    } else {
      getSlides().forEach(function (s) {
        s.classList.remove('is-active', 'is-enter-left', 'is-enter-right');
      });
    }

    try {
      localStorage.setItem(STORAGE_VIEW, mode);
    } catch (_e) {}
  }

  function init() {
    captureViFromDom();

    let locale = 'vi';
    try {
      const saved = localStorage.getItem(STORAGE_LOCALE);
      if (saved === 'vi' || saved === 'ja') locale = saved;
    } catch (_e) {}

    let viewMode = 'vertical';
    try {
      const savedV = localStorage.getItem(STORAGE_VIEW);
      if (savedV === 'vertical' || savedV === 'horizontal') viewMode = savedV;
    } catch (_e) {}

    applyLocale(locale);
    document.getElementById('btn-lang-vi').setAttribute('aria-pressed', locale === 'vi' ? 'true' : 'false');
    document.getElementById('btn-lang-ja').setAttribute('aria-pressed', locale === 'ja' ? 'true' : 'false');

    setViewMode(viewMode);

    document.getElementById('btn-lang-vi').addEventListener('click', function () {
      locale = 'vi';
      applyLocale('vi');
      document.getElementById('btn-lang-vi').setAttribute('aria-pressed', 'true');
      document.getElementById('btn-lang-ja').setAttribute('aria-pressed', 'false');
      if (viewMode === 'horizontal') updateSlideStatus('vi', slideIndex);
    });
    document.getElementById('btn-lang-ja').addEventListener('click', function () {
      locale = 'ja';
      applyLocale('ja');
      document.getElementById('btn-lang-vi').setAttribute('aria-pressed', 'false');
      document.getElementById('btn-lang-ja').setAttribute('aria-pressed', 'true');
      if (viewMode === 'horizontal') updateSlideStatus('ja', slideIndex);
    });

    document.getElementById('btn-view-vertical').addEventListener('click', function () {
      viewMode = 'vertical';
      setViewMode('vertical');
    });
    document.getElementById('btn-view-horizontal').addEventListener('click', function () {
      viewMode = 'horizontal';
      setViewMode('horizontal');
    });

    document.getElementById('btn-prev').addEventListener('click', function () {
      setHorizontalIndex(slideIndex - 1, -1);
    });
    document.getElementById('btn-next').addEventListener('click', function () {
      setHorizontalIndex(slideIndex + 1, 1);
    });

    document.addEventListener('keydown', function (e) {
      if (viewMode !== 'horizontal') return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setHorizontalIndex(slideIndex - 1, -1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setHorizontalIndex(slideIndex + 1, 1);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
