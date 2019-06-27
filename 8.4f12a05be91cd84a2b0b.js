(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CtGY:function(t,e){t.exports='<div id="content">\n  \n  <sa-widgets-grid>\n\n    <div class="row">\n      <article class="col-sm-12">\n\n        <div sa-widget [editbutton]="false" color="blueDark">\n          <header><span class="widget-icon"> <i class="fa fa-table"></i> </span>\n            <h2>Users </h2></header>\n          <div>\n            <div class="widget-body no-padding">\n              <sa-datatable\n                [options]="{\n            ajax: \'assets/api/tables/datatables.filters.json\',\n            columns: [ {data: \'name\'}, {data: \'position\'}, {data: \'office\'}, {data: \'age\'}, {data: \'date\'}, {data: \'salary\'} ],\n            buttons: [\n            \'copy\', \'excel\', \'pdf\', \'print\'\n            ] }\n            "\n            paginationLength="true" tableClass="table table-condenced table-striped table-bordered">\n                <thead>\n                <tr>\n                  <th class="hasinput" [ngStyle]="{width:\'17%\'}"><input type="text"\n                                                                        class="form-control"\n                                                                        placeholder="Filter Name"/>\n                  </th>\n                  <th class="hasinput" [ngStyle]="{width:\'18%\'}">\n                    <div class="input-group"><input class="form-control"\n                                                    placeholder="Filter Position"\n                                                    type="text"/> <span\n                      class="input-group-addon"> <span class="onoffswitch"> <input\n                      type="checkbox" name="start_interval" class="onoffswitch-checkbox"\n                      id="st3"/> <label class="onoffswitch-label" for="st3"> <span\n                      class="onoffswitch-inner" data-swchon-text="YES"\n                      data-swchoff-text="NO"></span> <span class="onoffswitch-switch"></span> </label> </span> </span>\n                    </div>\n                  </th>\n                  <th class="hasinput" [ngStyle]="{width:\'10%\'}"><input type="text"\n                                                                        class="form-control"\n                                                                        placeholder="Filter Office"/>\n                  </th>\n                  <th class="hasinput" [ngStyle]="{width:\'17%\'}"><input type="text"\n                                                                        class="form-control"\n                                                                        placeholder="Filter Age"/>\n                  </th>\n                  <th class="hasinput icon-addon"><input id="dateselect_filter" type="text"\n                                                         placeholder="Filter Date"\n                                                         class="form-control datepicker"\n                                                         data-dateformat="yy/mm/dd"/>\n                  </th>\n                  <th class="hasinput" [ngStyle]="{width:\'16%\'}">\n                    <input type="text" class="form-control"\n                           placeholder="Filter Salary"/>\n                  </th>\n                </tr>\n                <tr>\n                  <th data-class="expand">Name</th>\n                  <th>Position</th>\n                  <th data-hide="phone">Office</th>\n                  <th data-hide="phone">Age</th>\n                  <th data-hide="phone,tablet">Start date</th>\n                  <th data-hide="phone,tablet">Salary</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n            </div>\n          </div>\n        </div>\n\n      </article>\n    </div>\n\n  </sa-widgets-grid>\n</div>\n'},"O/wM":function(t,e,n){"use strict";n.r(e);var a=n("CcnG"),o=n("ZYCi"),s=function(t,e,n,a){var o,s=arguments.length,l=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(s<3?o(l):s>3?o(e,n,l):o(e,n))||l);return s>3&&l&&Object.defineProperty(e,n,l),l},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.ngOnInit=function(){},t=s([Object(a.Component)({selector:"sa-datatables-users",template:n("CtGY")}),l("design:paramtypes",[])],t)}(),i=[{path:"",component:c,data:{pageTitle:"Datatables"}}],r=o.d.forChild(i),d=function(t,e,n,a){var o,s=arguments.length,l=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(s<3?o(l):s>3?o(e,n,l):o(e,n))||l);return s>3&&l&&Object.defineProperty(e,n,l),l},p=[{path:"",component:c}],f=function(){function t(){}return t=d([Object(a.NgModule)({imports:[o.d.forChild(p)],exports:[o.d]})],t)}(),h=n("PCNd"),u=n("qKo4"),b=n("Ip0R");n.d(e,"TablesModule",function(){return g});var y=function(t,e,n,a){var o,s=arguments.length,l=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(s<3?o(l):s>3?o(e,n,l):o(e,n))||l);return s>3&&l&&Object.defineProperty(e,n,l),l},g=function(){function t(){}return t=y([Object(a.NgModule)({declarations:[c],imports:[r,b.CommonModule,h.a,u.a,f]})],t)}()}}]);