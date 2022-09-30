# changes for dashboard

# line 70
```
<h4 class="small-text-italic" id="dept">BackEnd</h4>
        </div>
      </div>
    </div>
  </section>
```
to
```
<h4 class="small-text-italic" id="dept">BackEnd</h4>
              </div>
            </div>
          </div>

          <i class="fa-solid fa-bars" id="fa-bars"></i>
        </section>
```

# line 77
```
<section id="sidebar">
```
to
```
<section id="sidebar" class="sidebar">
```

# line 81
```
<div id="arrow-box" onclick="toggleArrow()">
          <!-- -->
          <i class="fa-solid fa-arrow-left icon-14" id="arrow"></i>
        </div>
```
to
```
 <div id="arrow-box" onclick="toggleArrow()" > <!-- -->
                <i class="fa-solid fa-arrow-left icon-14" id="arrow"></i>
                
              </div>
              <i class="fa-solid fa-xmark" id="fa-xmark"></i>
```
