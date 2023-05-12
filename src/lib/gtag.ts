export const GA_TRACKING_ID = 'G-12278KDRPX'; // ここにGoogle AnalyticsのトラッキングIDを入力

// イベントを送信する関数
export const event = (action: string, params: Gtag.ControlParams) => {
  gtag('event', action, params);
};
