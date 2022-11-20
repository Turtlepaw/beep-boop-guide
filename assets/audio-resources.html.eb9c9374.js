import{e as n}from"./app.468a7b75.js";const s={},a=n('<h1 id="audio-resources" tabindex="-1"><a class="header-anchor" href="#audio-resources" aria-hidden="true">#</a> Audio Resources</h1><p>Audio resources contain audio that can be played by an audio player to voice connections.</p><h2 id="cheat-sheet" tabindex="-1"><a class="header-anchor" href="#cheat-sheet" aria-hidden="true">#</a> Cheat sheet</h2><h3 id="creation" tabindex="-1"><a class="header-anchor" href="#creation" aria-hidden="true">#</a> Creation</h3><p>There are many ways to create an audio resource. Below are some example scenarios:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createReadStream <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> createAudioResource<span class="token punctuation">,</span> StreamType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@discordjs/voice&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Basic, default options are:</span>\n<span class="token comment">// Input type is unknown, so will use FFmpeg to convert to Opus under-the-hood</span>\n<span class="token comment">// Inline volume is opt-in to improve performance</span>\n<span class="token keyword">let</span> resource <span class="token operator">=</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;file.mp3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Will use FFmpeg with volume control enabled</span>\nresource <span class="token operator">=</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;file.mp3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> inlineVolume<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nresource<span class="token punctuation">.</span>volume<span class="token punctuation">.</span><span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Will play .ogg or .webm Opus files without FFmpeg for better performance</span>\n<span class="token comment">// Remember, inline volume is still disabled</span>\nresource <span class="token operator">=</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;file.ogg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tinputType<span class="token operator">:</span> StreamType<span class="token punctuation">.</span>OggOpus<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Will play with FFmpeg due to inline volume being enabled.</span>\nresource <span class="token operator">=</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;file.webm&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tinputType<span class="token operator">:</span> StreamType<span class="token punctuation">.</span>WebmOpus<span class="token punctuation">,</span>\n\tinlineVolume<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nplayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="deletion" tabindex="-1"><a class="header-anchor" href="#deletion" aria-hidden="true">#</a> Deletion</h3><p>The underlying streams of an audio resource are destroyed and flushed once an audio player is done playing their audio. Make sure to remove any references you&#39;ve created to the resource to prevent memory leaks.</p><h2 id="handling-errors" tabindex="-1"><a class="header-anchor" href="#handling-errors" aria-hidden="true">#</a> Handling errors</h2><p>For most scenarios, you will create an audio resource for immediate use by an audio player. The audio player will propagate errors from the resource for you, so you can attach <code>error</code> handlers to the player instead of the resource.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createAudioResource<span class="token punctuation">,</span> createAudioPlayer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@discordjs/voice&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token function">createAudioPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// An AudioPlayer will always emit an &quot;error&quot; event with a .resource property</span>\nplayer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span> <span class="token string">&#39;with track&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>resource<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> resource <span class="token operator">=</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span><span class="token string">&#39;/home/user/voice/music.mp3&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tmetadata<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\ttitle<span class="token operator">:</span> <span class="token string">&#39;A good song!&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nplayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>However, you can also attach an error handler specifically to the audio resource if you&#39;d like to. This is <strong>not recommended</strong>, as you are not allowed to change the state of an audio player from the error handlers of an audio resource (on the other hand, you are allowed to do this from the error handle of an audio player, as shown above.)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createAudioResource<span class="token punctuation">,</span> createAudioPlayer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@discordjs/voice&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token function">createAudioPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> resource <span class="token operator">=</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span><span class="token string">&#39;/home/user/voice/music.mp3&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tmetadata<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\ttitle<span class="token operator">:</span> <span class="token string">&#39;A good song!&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Not recommended - listen to errors from the audio player instead for most usecases!</span>\nresource<span class="token punctuation">.</span>playStream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span> <span class="token string">&#39;with track&#39;</span><span class="token punctuation">,</span> resource<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nplayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="optimizations" tabindex="-1"><a class="header-anchor" href="#optimizations" aria-hidden="true">#</a> Optimizations</h2><p>To improve performance, you can consider the following methods. They reduce the computational demand required to play audio, and could help to reduce jitter in the audio stream.</p><h3 id="not-using-inline-volume" tabindex="-1"><a class="header-anchor" href="#not-using-inline-volume" aria-hidden="true">#</a> Not using inline volume</h3><p>By default, inline volume is disabled for performance reasons. Enabling it will allow you to modify the volume of your stream in realtime. This comes at a performance cost, even if you aren&#39;t actually modifying the volume of your stream.</p><p>Make sure you consider whether it is worth enabling for your use case.</p><h3 id="playing-opus-streams" tabindex="-1"><a class="header-anchor" href="#playing-opus-streams" aria-hidden="true">#</a> Playing Opus streams</h3><p>If you are repeatedly playing the same resource, you may consider converting it to Ogg opus or WebM opus. Alternatively, if you are fetching an external resource and are able to specify a format that you&#39;d like to stream the resource in, you should consider specifying Ogg opus or WebM opus.</p><p>The reason for this is that you can remove FFmpeg from the process of streaming audio. FFmpeg is used to convert unknown inputs into Opus audio which can be streamed to Discord. If your audio is already in the Opus format, this removes one of the most computationally demanding parts of the audio pipeline from the streaming process, which would surely improve performance.</p><p>Both of the examples below will skip the FFmpeg component of the pipeline to improve performance.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createReadStream <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> createAudioResource<span class="token punctuation">,</span> StreamType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@discordjs/voice&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> resource <span class="token operator">=</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;my_file.ogg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tinputType<span class="token operator">:</span> StreamType<span class="token punctuation">.</span>OggOpus<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nresource <span class="token operator">=</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;my_file.webm&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\tinputType<span class="token operator">:</span> StreamType<span class="token punctuation">.</span>WebmOpus<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This optimization is useful if you do not want to use inline volume. Enabling inline volume will disable the optimization.</p></div><h3 id="probing-to-determine-stream-type" tabindex="-1"><a class="header-anchor" href="#probing-to-determine-stream-type" aria-hidden="true">#</a> Probing to determine stream type</h3><p>The voice library is also able to determine whether a readable stream is an Ogg/Opus or WebM/Opus stream. This means that you can still gain the performance benefits that come with playing an Opus stream, even if you aren&#39;t sure in advance what type of audio stream you&#39;ll be playing.</p><p>This is achieved by probing a small chunk of the beginning of the audio stream to see if it is suitable for demuxing:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createReadStream <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> demuxProbe<span class="token punctuation">,</span> createAudioResource <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@discordjs/voice&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">probeAndCreateResource</span><span class="token punctuation">(</span><span class="token parameter">readableStream</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> <span class="token punctuation">{</span> stream<span class="token punctuation">,</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">demuxProbe</span><span class="token punctuation">(</span>readableStream<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">return</span> <span class="token function">createAudioResource</span><span class="token punctuation">(</span>stream<span class="token punctuation">,</span> <span class="token punctuation">{</span> inputType<span class="token operator">:</span> type <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// Creates an audio resource with inputType = StreamType.Arbitrary</span>\n\t<span class="token keyword">const</span> mp3Stream <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">probeAndCreateResource</span><span class="token punctuation">(</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;file.mp3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Creates an audio resource with inputType = StreamType.OggOpus</span>\n\t<span class="token keyword">const</span> oggStream <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">probeAndCreateResource</span><span class="token punctuation">(</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;file.ogg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Creates an audio resource with inputType = StreamType.WebmOpus</span>\n\t<span class="token keyword">const</span> webmStream <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">probeAndCreateResource</span><span class="token punctuation">(</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;file.webm&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">createResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',28);s.render=function(n,s){return a};export{s as default};
