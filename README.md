
# `gradio_rangeslider`
<a href="https://pypi.org/project/gradio_rangeslider/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_rangeslider"></a> <a href="https://github.com/freddyaboulton/gradio-range-slider/issues" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/Issues-white?logo=github&logoColor=black"></a> <a href="https://huggingface.co/spaces/freddyaboulton/gradio_rangeslider/discussions" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/%F0%9F%A4%97%20Discuss-%23097EFF?style=flat&logoColor=black"></a>

🛝 Slider component for selecting a range of values

## Installation

```bash
pip install gradio_rangeslider
```

## Usage

```python

import gradio as gr
from gradio_rangeslider import RangeSlider
from pathlib import Path

text = "## The range is: {min} to {max}"

docs = Path(__file__).parent / "docs.md"

with gr.Blocks() as demo:
    with gr.Tabs():
        with gr.Tab("Demo"):
            gr.Markdown("""## 🛝 RangeSlider

            ## Drag either end and see the selected endpoints update in real-time.
            """) 
            range_slider = RangeSlider(minimum=0, maximum=100, value=(0, 100))
            range_ = gr.Markdown(value=text.format(min=0, max=100))
            range_slider.change(lambda s: text.format(min=s[0], max=s[1]), range_slider, range_,
                                show_progress="hide", trigger_mode="always_last")
            gr.Slider(label="Normal slider", minimum=0, maximum=100, value=50, interactive=True)
            gr.Examples([(20, 30), (40, 80)], inputs=[range_slider])
        with gr.Tab("Docs"):
            gr.Markdown(docs.read_text())


if __name__ == "__main__":
    demo.launch()
```

## `RangeSlider`

### Initialization

<table>
<thead>
<tr>
<th align="left">name</th>
<th align="left" style="width: 25%;">type</th>
<th align="left">default</th>
<th align="left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>minimum</code></td>
<td align="left" style="width: 25%;">

```python
float
```

</td>
<td align="left"><code>0</code></td>
<td align="left">minimum value for slider.</td>
</tr>

<tr>
<td align="left"><code>maximum</code></td>
<td align="left" style="width: 25%;">

```python
float
```

</td>
<td align="left"><code>100</code></td>
<td align="left">maximum value for slider.</td>
</tr>

<tr>
<td align="left"><code>value</code></td>
<td align="left" style="width: 25%;">

```python
typing.Union[
    typing.Tuple[float, float], typing.Callable, NoneType
][typing.Tuple[float, float][float, float], Callable, None]
```

</td>
<td align="left"><code>None</code></td>
<td align="left">default value. If callable, the function will be called whenever the app loads to set the initial value of the component. Ignored if randomized=True.</td>
</tr>

<tr>
<td align="left"><code>step</code></td>
<td align="left" style="width: 25%;">

```python
float | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">increment between slider values.</td>
</tr>

<tr>
<td align="left"><code>label</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.</td>
</tr>

<tr>
<td align="left"><code>info</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">additional component description.</td>
</tr>

<tr>
<td align="left"><code>every</code></td>
<td align="left" style="width: 25%;">

```python
float | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.</td>
</tr>

<tr>
<td align="left"><code>show_label</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">if True, will display label.</td>
</tr>

<tr>
<td align="left"><code>container</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will place the component in a container - providing some extra padding around the border.</td>
</tr>

<tr>
<td align="left"><code>scale</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.</td>
</tr>

<tr>
<td align="left"><code>min_width</code></td>
<td align="left" style="width: 25%;">

```python
int
```

</td>
<td align="left"><code>160</code></td>
<td align="left">minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.</td>
</tr>

<tr>
<td align="left"><code>interactive</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">if True, slider will be adjustable; if False, adjusting will be disabled. If not provided, this is inferred based on whether the component is used as an input or output.</td>
</tr>

<tr>
<td align="left"><code>visible</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will be hidden.</td>
</tr>

<tr>
<td align="left"><code>elem_id</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>elem_classes</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>render</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.</td>
</tr>

<tr>
<td align="left"><code>labels</code></td>
<td align="left" style="width: 25%;">

```python
Sequence[str] | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Optional list of labels to display for each slider step. Length must match ``maximum - minimum + 1``.</td>
</tr>
</tbody></table>


### Events

| name | description |
|:-----|:------------|
| `change` | Triggered when the value of the RangeSlider changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input. |
| `input` | This listener is triggered when the user changes the value of the RangeSlider. |
| `release` | This listener is triggered when the user releases the mouse on this RangeSlider. |



### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As output:** Is passed, passes slider value as a {float} into the function.
- **As input:** Should return, expects an {int} or {float} returned from function and sets slider value to it as long as it is within range (otherwise, sets to minimum value).

 ```python
 def predict(
     value: typing.Tuple[float, float][float, float]
 ) -> typing.Optional[typing.Tuple[float, float]][
    typing.Tuple[float, float][float, float], None
]:
     return value
 ```
 
