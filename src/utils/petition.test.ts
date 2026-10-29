import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validatePetitionForm,
  formatNumber,
  calculateGoalProgress,
  generatePostContent,
  getShareUrl,
} from './petition';

test('validatePetitionForm rejects empty or invalid submissions', () => {
  const result = validatePetitionForm({
    fullName: '',
    email: 'bad-email',
    country: '',
    comment: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.country);
});

test('validatePetitionForm accepts valid submissions', () => {
  const result = validatePetitionForm({
    fullName: 'Amara Okonkwo',
    email: 'amara.okonkwo@example.org',
    country: 'Nigeria',
    comment: 'Our traditional herbal knowledge must remain free for future generations.',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('formatNumber properly adds comma thousand separators', () => {
  assert.equal(formatNumber(1250), '1,250');
  assert.equal(formatNumber(84219), '84,219');
  assert.equal(formatNumber(1000000), '1,000,000');
});

test('calculateGoalProgress calculates clamped percentage', () => {
  assert.equal(calculateGoalProgress(50000, 100000), 50);
  assert.equal(calculateGoalProgress(84219, 100000), 84.2);
  assert.equal(calculateGoalProgress(120000, 100000), 100);
  assert.equal(calculateGoalProgress(0, 100000), 0);
});

test('generatePostContent includes required hashtags', () => {
  const post = generatePostContent('x');
  assert.ok(post.includes('#FreeAfrica'));
  assert.ok(post.includes('#StoptheNutritionBill'));
  assert.ok(post.includes('HB 2659'));
});

test('getShareUrl creates valid share URLs for supported platforms', () => {
  const tweetUrl = getShareUrl('x', 'Test Tweet #FreeAfrica', 'https://example.com');
  assert.ok(tweetUrl);
  assert.ok(tweetUrl.startsWith('https://twitter.com/intent/tweet?text='));

  const waUrl = getShareUrl('whatsapp', 'Emergency Message', 'https://example.com');
  assert.ok(waUrl);
  assert.ok(waUrl.startsWith('https://api.whatsapp.com/send?text='));

  const unsupportedUrl = getShareUrl('wechat', 'Message', 'https://example.com');
  assert.equal(unsupportedUrl, null);
});
