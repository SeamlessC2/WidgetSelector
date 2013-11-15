var widget_controller = null;

owfdojo.addOnLoad(function() {
    OWF.ready(function(){
        widget_controller = new WidgetController();
        widget_controller.init();
                
        var widget_store = widget_controller.widget_store;
        var widget_panel = widget_controller.getWidgetDataView(widget_store);
   
        //adjust for recommendations
        var panel_width = 555;
        var panel_height = 200;
        var txt = "Select a widget for this data. ";
        if(widget_controller.widget_recommendations.length > 0){
            txt +="<br/><span class='widget_recommended'>Recommended widgets are highlighted</span>";
        }
        var banner_panel = Ext.create('Ext.Panel', {
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            defaults: {
                border:false
            },
            height: 100,
            items: [
            {
                html:"<div class='banner'>Select Widget</div>",
                flex:1
            },

            {
                html:"<div class='text'>"+txt+"</div>",
                height: 40
            },
            ]

        });
                 
        //var dashchooser = dashboard_controller.getDashboardLayoutDataView();
        var main_panel = Ext.create('Ext.Panel', {
            id: "main_panel",
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            defaults: {
                border:false
            },
            items: [
            banner_panel,
            widget_panel
            ]
        });

        Ext.application({
            name: 'DataComposer',
            launch: function() {
                Ext.create('Ext.container.Viewport', {
                    id: "widget_chooser",
                    layout: 'card',
                    //width: 600,
                    //height: 350,
                    border: false,
                    items: [
                    main_panel
                    ]
                });            
            }
        });
    });
});