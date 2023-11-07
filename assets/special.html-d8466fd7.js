import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as s}from"./app-ee5f028b.js";const e={},d=s(`<h2 id="戳一戳" tabindex="-1"><a class="header-anchor" href="#戳一戳" aria-hidden="true">#</a> 戳一戳</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Shamrock 对于戳一戳的定义与 <code>go-cqhttp</code> 不同。</p></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>戳一戳类型</td></tr><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>戳一戳 ID</td></tr><tr><td>strength</td><td>int</td><td>✓</td><td>✓</td><td>否</td><td>戳一戳强度(1-5 默认1)</td></tr></tbody></table><h3 id="cq-码" tabindex="-1"><a class="header-anchor" href="#cq-码" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:poke,type=1,id=10000]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段" tabindex="-1"><a class="header-anchor" href="#消息段" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;poke&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strength&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="戳一戳-双击头像" tabindex="-1"><a class="header-anchor" href="#戳一戳-双击头像" aria-hidden="true">#</a> 戳一戳(双击头像)</h2><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>QQ号</td></tr></tbody></table><h3 id="cq-码-1" tabindex="-1"><a class="header-anchor" href="#cq-码-1" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:touch,id=123456]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-1" tabindex="-1"><a class="header-anchor" href="#消息段-1" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;touch&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">123456</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="音乐" tabindex="-1"><a class="header-anchor" href="#音乐" aria-hidden="true">#</a> 音乐</h2><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>音乐类型(<code>qq</code>/<code>163</code>)</td></tr><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>音乐 ID</td></tr></tbody></table><h3 id="cq-码-2" tabindex="-1"><a class="header-anchor" href="#cq-码-2" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:music,type=qq,id=123456]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-2" tabindex="-1"><a class="header-anchor" href="#消息段-2" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;music&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qq&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">123456</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="音乐-自定义" tabindex="-1"><a class="header-anchor" href="#音乐-自定义" aria-hidden="true">#</a> 音乐(自定义)</h2><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>音乐类型(自定义请使用 <code>custom</code></td></tr><tr><td>url</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>跳转链接</td></tr><tr><td>audio</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>音乐音频链接</td></tr><tr><td>title</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>标题</td></tr><tr><td>singer</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>歌手</td></tr><tr><td>image</td><td>string</td><td>✓</td><td>✓</td><td>否</td><td>封面图片链接</td></tr></tbody></table><h3 id="cq-码-3" tabindex="-1"><a class="header-anchor" href="#cq-码-3" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:music,type=custom,url=https://example.com,audio=https://example.com/music.mp3,title=Music,singer=Music,image=https://example.com/image.jpg]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-3" tabindex="-1"><a class="header-anchor" href="#消息段-3" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;music&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;audio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/music.mp3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Music&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;singer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Music&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/image.jpg&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="天气" tabindex="-1"><a class="header-anchor" href="#天气" aria-hidden="true">#</a> 天气</h2><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>city</td><td>string</td><td>✓</td><td>✓</td><td>否</td><td>城市名称</td></tr><tr><td>code</td><td>string</td><td>✓</td><td>✓</td><td>否</td><td>城市代码</td></tr></tbody></table><h3 id="cq-码-4" tabindex="-1"><a class="header-anchor" href="#cq-码-4" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:weather,city=上海]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-4" tabindex="-1"><a class="header-anchor" href="#消息段-4" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;weather&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;上海&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h2><h3 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>lat</td><td>float</td><td>✓</td><td>✓</td><td>是</td><td>纬度</td></tr><tr><td>lon</td><td>float</td><td>✓</td><td>✓</td><td>是</td><td>经度</td></tr><tr><td>title</td><td>string</td><td>✓</td><td>×</td><td>否</td><td>标题</td></tr><tr><td>content</td><td>string</td><td>✓</td><td>×</td><td>否</td><td>内容</td></tr></tbody></table><h3 id="cq-码-5" tabindex="-1"><a class="header-anchor" href="#cq-码-5" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:location,lat=39.915168,lon=116.403875]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-5" tabindex="-1"><a class="header-anchor" href="#消息段-5" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;location&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">39.915168</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">116.403875</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链接分享" tabindex="-1"><a class="header-anchor" href="#链接分享" aria-hidden="true">#</a> 链接分享</h2><h3 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>链接地址</td></tr><tr><td>title</td><td>string</td><td>✓</td><td>×</td><td>是</td><td>标题</td></tr><tr><td>content</td><td>string</td><td>✓</td><td>×</td><td>否</td><td>内容</td></tr><tr><td>image</td><td>string</td><td>✓</td><td>×</td><td>否</td><td>图片链接</td></tr><tr><td>file</td><td>string</td><td>✓</td><td>×</td><td>否</td><td>文件链接</td></tr></tbody></table><h3 id="cq-码-6" tabindex="-1"><a class="header-anchor" href="#cq-码-6" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:share,url=https://example.com,title=Example,content=Example,image=https://example.com/image.jpg,file=https://example.com/file.zip]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-6" tabindex="-1"><a class="header-anchor" href="#消息段-6" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;share&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Example&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Example&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/image.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/file.zip&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="礼物" tabindex="-1"><a class="header-anchor" href="#礼物" aria-hidden="true">#</a> 礼物</h2><h3 id="参数-7" tabindex="-1"><a class="header-anchor" href="#参数-7" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>qq</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>QQ 号</td></tr><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>礼物 ID</td></tr></tbody></table><h3 id="cq-码-7" tabindex="-1"><a class="header-anchor" href="#cq-码-7" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:gift,qq=123456,id=10000]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-7" tabindex="-1"><a class="header-anchor" href="#消息段-7" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gift&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;qq&quot;</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">10000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),i=[d];function o(r,p){return a(),n("div",null,i)}const u=t(e,[["render",o],["__file","special.html.vue"]]);export{u as default};
